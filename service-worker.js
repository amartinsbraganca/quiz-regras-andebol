// Só é preciso mudar esta versão quando se altera a lista de ficheiros abaixo
// ou este ficheiro. Alterações às perguntas, HTML ou CSS chegam sozinhas.
const CACHE_NAME = "quiz-cache-v7";

// Caminhos relativos à localização deste ficheiro, para funcionar também numa subpasta
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./questions.json",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./logo_fap.png",
  "./logo_efaa.png",
  "./sounds/correct.mp3",
  "./sounds/wrong.mp3",
  // Bibliotecas externas: versões fixas, por isso nunca mudam
  "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
];

// Ficheiros da app que podem mudar: vão sempre primeiro à rede
const networkFirst = ["./", "./index.html", "./style.css", "./script.js", "./questions.json", "./manifest.json"]
  .map((path) => new URL(path, self.location).pathname);

// Instala e guarda em cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      // Não instala uma versão nova com perguntas estragadas: fica a anterior.
      // Verifica antes de mexer na cache, para não estragar a cópia boa.
      const questions = await fetch("./questions.json", { cache: "reload" });
      if (!questions.ok || !(await isValidQuestions(questions))) {
        throw new Error("questions.json inválido; instalação cancelada.");
      }
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(urlsToCache.map((url) => new Request(url, { cache: "reload" })));
    })()
  );
  // Não ativa logo: espera que o utilizador clique no aviso "Nova versão disponível!"
});

// Ativa o service worker e limpa caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim(); // garante que o novo SW controla imediatamente
});

const questionsPath = new URL("./questions.json", self.location).pathname;

// Verificação rápida de que questions.json é utilizável (a verificação completa
// é feita antes de publicar, por scripts/validate-questions.js)
function isValidQuestions(response) {
  return response.json()
    .then((data) => Array.isArray(data) && data.length > 0 &&
      data.every((p) => p && typeof p.pergunta === "string" && Array.isArray(p.opcoes)))
    .catch(() => false);
}

// Rede primeiro: tenta a versão mais recente e guarda-a; sem rede usa a cache.
// Se for publicado um questions.json estragado, continua a usar a última versão boa.
function fromNetworkFirst(request) {
  const fromCache = () =>
    caches.match(request, { ignoreSearch: true }).then((response) => response || Promise.reject());

  return fetch(request, { cache: "no-cache" })
    .then(async (response) => {
      if (!response.ok) return fromCache().catch(() => response);
      if (new URL(request.url).pathname === questionsPath && !(await isValidQuestions(response.clone()))) {
        console.warn("questions.json inválido na rede; a usar a última versão guardada.");
        return fromCache().catch(() => response);
      }
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      return response;
    })
    .catch(fromCache);
}

// Cache primeiro: para imagens e outros ficheiros que raramente mudam
function fromCacheFirst(request) {
  return caches.match(request).then((response) => response || fetch(request));
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  const isAppFile = url.origin === self.location.origin && networkFirst.includes(url.pathname);

  event.respondWith(isAppFile ? fromNetworkFirst(event.request) : fromCacheFirst(event.request));
});

// --- Detectar nova versão e avisar o usuário ---
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
