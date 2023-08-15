// Seleção dos elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNum = document.querySelectorAll(".num");
const botoesOpe = document.querySelectorAll(".operadores");

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
    calculando = false;
  } else {
    operacaoAtual += evento.target.textContent;
  }
  atualizaDisplay();
};

const insere_ponto = ()=> {
  if(operacaoAtual.indexOf(".")=== -1){
    operacaoAtual += ".";
    atualizaDisplay();
  }
}

const insere_operador = (evento)=> {
  if (operacaoAtual !== "") {
    if (!calculando) {
      if (operador !== null) {
        calcula();
      }
      valorAnterior = operacaoAtual;
      operacaoAtual = "";
    }
    operador = evento.target.textContent;
  }
}

const calcula = ()=> {
  let resultado = null;
  const operandoAnterior = parseFloat(valorAnterior);
  const operandoAtual = parseFloat(operacaoAtual);

  switch (operador) {
    case "+":
      resultado = operandoAnterior + operandoAtual;
      break;
    case "-":
      resultado = operandoAnterior - operandoAtual;
      break;
    case "*":
      resultado = operandoAnterior * operandoAtual;
      break;
    case "/":
      resultado = operandoAnterior / operandoAtual;
      break;
  }
  operacaoAtual = String(resultado);
  valorAnterior = operacaoAtual;
  calculando = true;
  atualizaDisplay();
}

// Eventos
botaoPonto.addEventListener("click", insere_ponto);

botoesNum.forEach((botao) => botao.addEventListener("click", insere_numero));

botoesOpe.forEach((botao) => botao.addEventListener("click", insere_operador));

botaoIgual.addEventListener("click", calcula);
