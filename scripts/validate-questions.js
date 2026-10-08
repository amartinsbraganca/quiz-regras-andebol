#!/usr/bin/env node
// Verifica questions.json antes de ser publicado.
// Uso: node scripts/validate-questions.js [caminho/para/questions.json]
// Erros (estrutura) fazem o script falhar; avisos (estilo) só são mostrados.

const fs = require("fs");
const path = require("path");

const FICHEIRO = process.argv[2] || path.join(__dirname, "..", "questions.json");
const CAMPOS_CONHECIDOS = ["pergunta", "opcoes", "correta", "regra", "explicacao"];
const NUMERO = /^(\d+)\.(\d+)\)|^(SAR)(\d+)\)/;
const emActions = !!process.env.GITHUB_ACTIONS;

const erros = [];
const avisos = [];
const texto = fs.readFileSync(FICHEIRO, "utf8");
const nomeFicheiro = path.relative(process.cwd(), FICHEIRO);

// Linha onde começa a pergunta no ficheiro, para as mensagens apontarem para o sítio certo
function linhaDe(pergunta) {
  const i = texto.indexOf(JSON.stringify(pergunta).slice(0, -1));
  return i < 0 ? undefined : texto.slice(0, i).split("\n").length;
}

function reportar(lista, id, linha, msg) {
  lista.push({ id, linha, msg });
}

let perguntas;
try {
  perguntas = JSON.parse(texto);
} catch (err) {
  // Versões mais antigas do Node só dão a posição (carácter), não a linha
  const linhaMsg = (err.message.match(/line (\d+)/) || [])[1];
  const posicao = (err.message.match(/position (\d+)/) || [])[1];
  const linha = linhaMsg ? Number(linhaMsg) : posicao ? texto.slice(0, Number(posicao)).split("\n").length : undefined;
  reportar(erros, "JSON", linha, `JSON inválido: ${err.message}`);
}

if (perguntas !== undefined && (!Array.isArray(perguntas) || perguntas.length === 0)) {
  reportar(erros, "JSON", 1, "O ficheiro tem de ser uma lista (array) de perguntas, não vazia.");
  perguntas = undefined;
}

if (perguntas) {
  const numerosVistos = new Map();
  const conteudosVistos = new Map();

  perguntas.forEach((p, i) => {
    const posicao = `#${i + 1}`;
    if (!p || typeof p !== "object" || Array.isArray(p)) {
      reportar(erros, posicao, undefined, "Cada pergunta tem de ser um objeto { ... }.");
      return;
    }

    const linha = typeof p.pergunta === "string" ? linhaDe(p.pergunta) : undefined;
    const m = typeof p.pergunta === "string" ? p.pergunta.match(NUMERO) : null;
    const id = m ? (m[3] ? `SAR${m[4]}` : `${m[1]}.${m[2]}`) : posicao;
    const erro = (msg) => reportar(erros, id, linha, msg);
    const aviso = (msg) => reportar(avisos, id, linha, msg);

    // --- Campos ---
    for (const campo of Object.keys(p)) {
      if (!CAMPOS_CONHECIDOS.includes(campo)) aviso(`Campo desconhecido "${campo}" (gralha?).`);
    }

    if (typeof p.pergunta !== "string" || !p.pergunta.trim()) {
      erro('Falta o texto da pergunta ("pergunta").');
    } else if (!m) {
      erro('A pergunta tem de começar pelo número, ex. "8.12) ..." ou "SAR3) ...".');
    }

    const opcoesValidas = Array.isArray(p.opcoes) && p.opcoes.length >= 2 &&
      p.opcoes.every((o) => typeof o === "string" && o.trim());
    if (!opcoesValidas) erro('"opcoes" tem de ser uma lista com pelo menos 2 textos.');

    const regraValida = p.regra === "SAR" || (Number.isInteger(p.regra) && p.regra >= 1 && p.regra <= 18);
    if (p.regra === undefined) erro('Falta a regra ("regra": um número de 1 a 18 ou "SAR").');
    else if (!regraValida) erro(`"regra" tem de ser um número de 1 a 18 ou "SAR" (está ${JSON.stringify(p.regra)}).`);

    const correta = Array.isArray(p.correta) ? p.correta : [p.correta];
    if (p.correta === undefined || correta.length === 0) {
      erro('Falta a resposta certa ("correta").');
    } else if (correta.some((c) => !Number.isInteger(c))) {
      erro(`"correta" tem de ser um número ou uma lista de números (está ${JSON.stringify(p.correta)}).`);
    } else if (new Set(correta).size !== correta.length) {
      erro(`"correta" tem números repetidos: ${JSON.stringify(p.correta)}.`);
    } else if (opcoesValidas) {
      const fora = correta.filter((c) => c < 0 || c >= p.opcoes.length);
      if (fora.length) {
        erro(`"correta" aponta para uma opção que não existe: ${fora.join(", ")} ` +
          `(há ${p.opcoes.length} opções, de 0 a ${p.opcoes.length - 1}).`);
      }
    }

    if (p.explicacao !== undefined && (typeof p.explicacao !== "string" || !p.explicacao.trim())) {
      erro('"explicacao", quando existe, tem de ser um texto.');
    }

    // --- Numeração ---
    if (m) {
      if (numerosVistos.has(id)) erro(`Número repetido: ${id} já é usado (linha ${numerosVistos.get(id)}).`);
      else numerosVistos.set(id, linha);

      const regraDoNumero = m[3] ? "SAR" : Number(m[1]);
      if (regraValida && regraDoNumero !== p.regra) {
        erro(`O número ${id} não corresponde à regra ${JSON.stringify(p.regra)}.`);
      }
    }

    // --- Letras das opções: a), b), c)... ---
    if (opcoesValidas) {
      p.opcoes.forEach((o, k) => {
        const letra = String.fromCharCode(97 + k);
        if (!o.startsWith(`${letra})`)) erro(`A opção ${k + 1} devia começar por "${letra})": "${o.slice(0, 30)}".`);
        else if (o[2] !== " ") aviso(`Falta um espaço depois de "${letra})": "${o.slice(0, 30)}".`);
      });
    }

    // --- Estilo ---
    const textos = [p.pergunta, ...(opcoesValidas ? p.opcoes : [])].filter((t) => typeof t === "string");
    if (textos.some((t) => /\S {2,}\S/.test(t))) aviso("Tem espaços duplos.");
    if (textos.some((t) => t !== t.trim())) aviso("Tem espaços no início ou no fim de um texto.");
    if (textos.some((t) => /\S [?!.,;:](?=\s|$)/.test(t))) aviso('Tem um espaço antes de pontuação (ex. "saída ?").');

    if (typeof p.pergunta === "string" && opcoesValidas) {
      const conteudo = JSON.stringify([p.pergunta.replace(NUMERO, "").trim(), p.opcoes]);
      if (conteudosVistos.has(conteudo)) aviso(`Pergunta igual à ${conteudosVistos.get(conteudo)}.`);
      else conteudosVistos.set(conteudo, id);
    }
  });
}

// --- Resultado ---
function mostrar(lista, tipo) {
  for (const { id, linha, msg } of lista) {
    const onde = linha ? `${nomeFicheiro}:${linha}` : nomeFicheiro;
    console.log(`${tipo === "error" ? "❌ ERRO " : "⚠️  AVISO"} ${onde}  [${id}] ${msg}`);
    // No GitHub Actions, aparece também como anotação no próprio ficheiro
    if (emActions) console.log(`::${tipo} file=${nomeFicheiro}${linha ? `,line=${linha}` : ""}::[${id}] ${msg}`);
  }
}

mostrar(erros, "error");
mostrar(avisos, "warning");

const total = perguntas ? `${perguntas.length} perguntas` : "ficheiro não lido";
console.log(`\n${total}: ${erros.length} erro(s), ${avisos.length} aviso(s).`);
if (erros.length) {
  console.log("❌ Corrige os erros antes de publicar.");
  process.exit(1);
}
console.log("✅ questions.json está válido.");
