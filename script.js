// Variáveis globais
let perguntas = []; // carregadas de questions.json

let indiceAtual = 0;
let acertos = 0;
let resultados = [];
let respostasSelecionadas = [];
let podeAvancar = false; 

document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('startQuizBtn');
  const startPage = document.getElementById('startPage');
  const modeSelection = document.getElementById('modeSelection');
  const appContainer = document.getElementById('appContainer');
  const randomModeBtn = document.getElementById('randomModeBtn');
  const orderedModeBtn = document.getElementById('orderedModeBtn');
  const videoTestBtn = document.getElementById('videoTestBtn');
  const rulesModeBtn = document.getElementById('rulesModeBtn');
  const randomOptions = document.getElementById('randomOptions');
  const startRandomQuiz = document.getElementById('startRandomQuiz');
  const numQuestions = document.getElementById('numQuestions');
  const quizContainer = document.getElementById('quizContainer');
  const nextBtn = document.getElementById('nextBtn');
  const toggleDarkMode = document.getElementById('toggleDarkMode');
  const exportBtn = document.getElementById('exportBtn');
  const progressText = document.getElementById('progress');
  const progressBar = document.getElementById('progressBar');
  const scoreEl = document.getElementById('score');
  const percentEl = document.getElementById('percentAcertos');
  const correctSound = document.getElementById('correctSound');
  const wrongSound = document.getElementById('wrongSound');

  const videoTestModal = document.getElementById('videoTestModal');
  const closeVideoModal = document.getElementById('closeVideoModal');
  const rulesModal = document.getElementById('rulesModal');
  const rulesList = document.getElementById('rulesList');
  const closerulesModal = document.getElementById('closerulesModal');

  const backBtn = document.getElementById('backBtn');
  const backConfirmModal = document.getElementById('backConfirmModal');
  const backYesBtn = document.getElementById('backYesBtn');
  const backNoBtn = document.getElementById('backNoBtn');

  const loadError = document.getElementById('loadError');

  function carregarPerguntas(){
    startBtn.disabled=true; startBtn.textContent='A carregar perguntas…';
    loadError.classList.add('hidden');
    fetch('questions.json')
      .then(r=>{ if(!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(dados=>{
        perguntas=dados;
        window.perguntasOriginais=[...dados];
        startBtn.disabled=false; startBtn.textContent='Começar';
      })
      .catch(err=>{
        console.error('❌ Falha ao carregar questions.json:', err);
        loadError.classList.remove('hidden');
        startBtn.disabled=false; startBtn.textContent='Tentar novamente';
      });
  }
  carregarPerguntas();

  const regras = [
    ...Array.from({ length: 18 }, (_, i) => ({ nome: `Regra ${i+1}`, valor: i+1 })),
    { nome: "SAR - Zona de Substituições", valor: "SAR" }
  ];
  const coresRegras = [
    "#f87171","#fbbf24","#34d399","#60a5fa","#a78bfa",
    "#f472b6","#facc15","#4ade80","#3b82f6","#c084fc",
    "#f472b6","#fb7185","#fcd34d","#34d399","#60a5fa",
    "#818cf8","#f472b6","#f472b6","#2dd4bf"
  ];

  // --------------------
  // Funções auxiliares
  // --------------------
 function atualizarScore() {
    const totalRespondidas = resultados.length;
    scoreEl.textContent = `Acertos: ${acertos} de ${totalRespondidas}`;
    const percentAcertos = totalRespondidas>0?Math.round((acertos/totalRespondidas)*100):0;
    percentEl.textContent = `Percentual de acerto: ${percentAcertos}%`;
  }

  function ocultarLogos() {
    document.querySelectorAll('.fixed-logos img').forEach(img=>img.style.display='none');
  }

  // Fisher–Yates: cada ordem tem a mesma probabilidade (sort com Math.random não é uniforme)
  function baralhar(lista){
    const a=[...lista];
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  // Compara cópias ordenadas, para não alterar o "correta" da pergunta nem a seleção
  function arraysIguais(a,b){
    if(a.length!==b.length) return false;
    const x=[...a].sort((m,n)=>m-n), y=[...b].sort((m,n)=>m-n);
    return x.every((v,i)=>v===y[i]);
  }

  // --------------------
  // Eventos Botões
  // --------------------
  startBtn?.addEventListener('click', ()=>{
    if(!window.perguntasOriginais){ carregarPerguntas(); return; }
    startPage.style.display='none'; modeSelection.style.display='flex';
  });
  randomModeBtn?.addEventListener('click', ()=> randomOptions.style.display='flex');
  startRandomQuiz?.addEventListener('click', ()=>{
    const n = parseInt(numQuestions.value,10);
    perguntas = baralhar(window.perguntasOriginais).slice(0,n);
    iniciarQuiz();
  });
  orderedModeBtn?.addEventListener('click', ()=>{
    perguntas = [...window.perguntasOriginais];
    iniciarQuiz();
  });

  videoTestBtn?.addEventListener('click', ()=> videoTestModal.classList.remove('hidden'));
  closeVideoModal?.addEventListener('click', ()=> videoTestModal.classList.add('hidden'));

  rulesModeBtn?.addEventListener('click', ()=>{
    rulesList.innerHTML='';
    regras.forEach((regra,idx)=>{
      const btn=document.createElement('button');
      btn.textContent= regra.nome;
      btn.style.backgroundColor=coresRegras[idx];
      btn.style.color='white';
      btn.style.padding='0.5rem 1rem';
      btn.style.border='none';
      btn.style.borderRadius='0.5rem';
      btn.style.cursor='pointer';
      btn.style.fontWeight='600';
      btn.addEventListener('click', ()=> startQuizPorRegra(regra.valor));
      rulesList.appendChild(btn);
    });
    rulesModal.classList.remove('hidden');
  });
  closerulesModal?.addEventListener('click', ()=> rulesModal.classList.add('hidden'));

  backBtn?.addEventListener('click', ()=> backConfirmModal.classList.remove('hidden'));
  backNoBtn?.addEventListener('click', ()=> backConfirmModal.classList.add('hidden'));
  backYesBtn?.addEventListener('click', ()=>{
    appContainer.style.display='none';
    startPage.style.display='flex';
    modeSelection.style.display='none';
    indiceAtual=0; acertos=0; resultados=[]; respostasSelecionadas=[]; atualizarScore();
    exportBtn.classList.add('hidden');
    backConfirmModal.classList.add('hidden');
  });

  toggleDarkMode?.addEventListener('click', ()=> document.body.classList.toggle('dark-mode'));

  nextBtn?.addEventListener('click', proximaPergunta);

  // --------------------
  // Funções Quiz
  // --------------------
  function iniciarQuiz(){
    indiceAtual=0; acertos=0; resultados=[]; respostasSelecionadas=[];
    exportBtn.classList.add('hidden');
    modeSelection.style.display='none'; appContainer.style.display='block';
    ocultarLogos(); renderPergunta();
  }

  function startQuizPorRegra(numeroRegra){
    perguntas = window.perguntasOriginais.filter(p=>p.regra===numeroRegra);
    if(perguntas.length===0){ alert("Não existem perguntas para esta regra."); return; }
    rulesModal.classList.add('hidden');
    iniciarQuiz();
  }

  function renderPergunta(){
    if(!perguntas[indiceAtual]) return;
    const p=perguntas[indiceAtual];
    quizContainer.innerHTML=`
      <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">${p.pergunta}</h2>
        <form id="formRespostas">
          ${p.opcoes.map((op,idx)=>`
            <div>
              <label style="display:block; padding:0.5rem; border-radius:0.5rem; cursor:pointer;">
                <input type="checkbox" name="resposta" value="${idx}"> ${op}
              </label>
            </div>`).join('')}
        </form>
      </div>
      <div id="feedback" class="mt-2"></div>
    `;
    progressText.textContent=`Progresso: ${indiceAtual+1}/${perguntas.length}`;
    progressBar.style.width=`${((indiceAtual+1)/perguntas.length)*100}%`;
    nextBtn.disabled=false; podeAvancar=false; nextBtn.textContent="Confirmar";
    document.querySelectorAll('input[name="resposta"]').forEach(i=>{ i.disabled=false; i.parentElement.style.backgroundColor=''; });
    atualizarScore();
  }

  function proximaPergunta(){
    const form=document.getElementById('formRespostas');
    if(!form) return;
    const inputs=Array.from(form.querySelectorAll('input[name="resposta"]'));
    const selecionados=inputs.filter(i=>i.checked).map(i=>Number(i.value));
    const feedback=document.getElementById('feedback');
    const perguntaAtual=perguntas[indiceAtual];
    let corretaArr=Array.isArray(perguntaAtual.correta)?perguntaAtual.correta:[perguntaAtual.correta];

    if(!podeAvancar){
      if(selecionados.length===0) return;
      const corretaResposta=arraysIguais(corretaArr,selecionados);
      if(corretaResposta){ acertos++; feedback.textContent="Correto!"; feedback.style.color="green"; correctSound?.play(); }
      else{ feedback.textContent="Incorreto!"; feedback.style.color="red"; wrongSound?.play(); }

      inputs.forEach(input=>{
        const label=input.parentElement; const idx=Number(input.value);
        if(corretaArr.includes(idx)) label.style.backgroundColor="#a7f3d0";
        if(selecionados.includes(idx)&&!corretaArr.includes(idx)) label.style.backgroundColor="#fecaca";
        input.disabled=true;
      });

      resultados[indiceAtual]=corretaResposta; respostasSelecionadas[indiceAtual]=selecionados; atualizarScore();
      podeAvancar=true; nextBtn.textContent="Próxima";
    }else{
      podeAvancar=false;
      if(indiceAtual<perguntas.length-1){ indiceAtual++; renderPergunta(); }
      else{ quizContainer.innerHTML=`<h2 class="text-xl font-bold mb-4">Quiz terminado!</h2><p>Acertos: ${acertos} em ${perguntas.length} perguntas.</p>`; nextBtn.disabled=true; exportBtn.classList.remove('hidden'); }
    }
  }
  // --- Exportar PDF ---
  exportBtn?.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const margin = 15;
    const maxWidth = 210 - 2 * margin;
    let y = margin;
    const lineHeight = 6;
    const totalPerguntas = perguntas.length;
    const totalRespondidas = resultados.length;
    const percentAcerto = totalRespondidas > 0 ? Math.round((acertos / totalRespondidas) * 100) : 0;

    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 30, 60);
    doc.text("Resultados do Quiz", margin, y);
    y += lineHeight * 2;

    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(50);
    doc.text(`Perguntas respondidas: ${totalRespondidas} / ${totalPerguntas}`, margin, y);
    y += lineHeight;
    doc.text(`Acertos: ${acertos}`, margin, y);
    y += lineHeight;
    doc.text(`Percentual de acerto: ${percentAcerto}%`, margin, y);
    y += lineHeight * 2;

    perguntas.forEach((p,i) => {
      const blocoPadding = 4;
      const espacoEntreBlocos = 4;
      const blocoWidth = maxWidth;
      const blocoColor = i%2===0?[245,245,245]:[220,235,245];

      doc.setFont(undefined,'bold');
      const perguntaLinhas = doc.splitTextToSize(`${i+1}. ${p.pergunta}`, blocoWidth - 2*blocoPadding);
      doc.setFont(undefined,'normal');
      const selecionados = respostasSelecionadas[i] || [];
      const opLinhasArray = p.opcoes.map((op, idx)=>{
        const isCorreta = Array.isArray(p.correta)?p.correta.includes(idx):p.correta===idx;
        const isSelecionada = selecionados.includes(idx);
        const texto = isSelecionada ? `${op}  (a tua resposta)` : op;
        return { linhas: doc.splitTextToSize(texto, blocoWidth - 2*blocoPadding), isCorreta, isSelecionada };
      });

      // y é a linha de base do texto; o bloco começa uma linha acima da primeira
      // linha e termina blocoPadding abaixo da linha "Correto/Incorreto".
      let linhasTotal = perguntaLinhas.length;
      opLinhasArray.forEach(opItem=>linhasTotal+=opItem.linhas.length);
      const blocoAltura = linhasTotal*lineHeight + 4 + lineHeight + blocoPadding;

      let topo = y - lineHeight;
      if(topo+blocoAltura>297-margin){doc.addPage();topo=margin;y=margin+lineHeight;}
      doc.setFillColor(...blocoColor);
      doc.roundedRect(margin, topo, blocoWidth, blocoAltura,3,3,'F');
      doc.setDrawColor(30,60,120);
      doc.setLineWidth(0.7);
      doc.roundedRect(margin, topo, blocoWidth, blocoAltura,3,3,'S');

      doc.setFont(undefined,'bold'); doc.setTextColor(30,60,120);
      perguntaLinhas.forEach(line=>{doc.text(line, margin+blocoPadding, y); y+=lineHeight;});
      y+=2;

      doc.setFont(undefined,'normal');
      opLinhasArray.forEach(opItem=>{
        doc.setTextColor(opItem.isCorreta?"green":opItem.isSelecionada?"red":50);
        opItem.linhas.forEach(line=>{doc.text(line, margin+blocoPadding, y); y+=lineHeight;});
      });

      y+=2;
      const userResp = resultados[i]!==undefined?resultados[i]:false;
      doc.setFont(undefined,'bold'); doc.setTextColor(userResp?"green":"red");
      doc.text(userResp?"Correto":"Incorreto", margin+blocoPadding, y);
      y = topo + blocoAltura + espacoEntreBlocos + lineHeight;
    });

    const hoje = new Date();
    const data = `${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2,'0')}-${String(hoje.getDate()).padStart(2,'0')}`;
    doc.save(`resultados_quiz_${data}.pdf`);
  });
});
