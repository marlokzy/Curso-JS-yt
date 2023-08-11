// Seleção dos elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNum = document.querySelectorAll(".num");
const botoesOpe = document.querySelector(".operadores");

// Variáveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funções
const atualizaDisplay = () => {
  display.value = operacaoAtual;
};

const insere_numero = (evento) => {
  if (calculando) {
    operacaoAtual = evento.target.textContent;
    calculando == false;
  } else {
    operacaoAtual += evento.target.textContent;
  }
  atualizaDisplay();
};

// Eventos
botoesNum.forEach((botao) => botao.addEventListener("click", insere_numero));
