const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você acha que IA vai dominar o mundo?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA vai dominar o mundo"}, 

            {texto: "Não",
            afirmação:"A IA não dominará o mundo"}]
    },
    { 
        enunciado: "A IA vai substituir os professores?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA logo tomará o lugar dos professores"}, 
                
            {texto: "Não",
            afirmação:"A IA jamais tomará o lugar dos professores"}]
    },
    { 
        enunciado: "A IA está pronta para todos?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, a IA será útil e está pronta para todos"}, 
                
            {texto: "Não",
            afirmação:"Não, a IA não é para o uso de todos"}]
    },
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
