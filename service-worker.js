// Só é preciso mudar esta versão quando se altera a lista de ficheiros abaixo
// ou este ficheiro. Alterações às perguntas, HTML ou CSS chegam sozinhas.
const CACHE_NAME = "quiz-cache-v3";

// Caminhos relativos à localização deste ficheiro, para funcionar também numa subpasta
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Ficheiros da app que podem mudar: vão sempre primeiro à rede
const networkFirst = ["./", "./index.html", "./style.css", "./script.js", "./manifest.json"]
  .map((path) => new URL(path, self.location).pathname);

// Instala e guarda em cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache.map((url) => new Request(url, { cache: "reload" })));
    })
  );
  self.skipWaiting(); // força o service worker a ativar imediatamente
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

// Rede primeiro: tenta a versão mais recente e guarda-a; sem rede usa a cache
function fromNetworkFirst(request) {
  return fetch(request, { cache: "no-cache" })
    .then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      }
      return response;
    })
    .catch(() =>
      caches.match(request, { ignoreSearch: true }).then((response) => response || Promise.reject())
    );
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
