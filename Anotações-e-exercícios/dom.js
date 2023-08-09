// DOM - Document Object Model

// Selecionar elementos
// metódo um pouco antigo
const elementoPorId = document.getElementById("meuId");

console.log(elementoPorId);

// metódo mais novo e mais recomendado por questões de padronização
const elementoPorId2 = document.querySelector("#meuId");

console.log(elementoPorId2);

// Manipular conteúdo de texto
const element = document.querySelector("#meuId");

console.log(element.textContent); // só mostrará o texto do Id identificado, no caso Olá, mundo!

setTimeout(() => {
  element.textContent = "Mudei de texto";
}, 2000);

// Trabalhando com atributos
const link = document.querySelector("a");

console.log(link);

link.setAttribute("href", "https://horadecodar.com.br/cursos"); // setAttribute para adicionar um novo link ao atributo

console.log(link.getAttribute("href")); // getAttribute para resgatar e visualizar o link

console.log(link.hasAttribute("target")); // hasAttribute para verificar se o atributo existe, se existir vai retornar true no console

link.removeAttribute("target"); // removeAttribute para remover determinado atributo

// Manipulação de classes do CSS
const elemento = document.querySelector("#meuId");

element.classList.add("novaClasse"); // para adc uma nova classe
element.classList.remove("minhaClasse"); // para remover uma determinada classe
element.classList.toggle("outraClasse"); // toggle -> se essa classe existe ele remove e se ñ existe ele coloca // nesse ele está colocando
element.classList.toggle("outraClasse"); // nesse ele está removendo

// Manipular o CSS
const elemento3 = document.querySelector("#meuId");

elemento3.style.color = "blue";
elemento3.style.backgroundColor = "red";
// background-color => backgroundColor

// Navegação entre nós - é basicamente navegar entre elementos
const elemento4 = document.querySelector("#meuInput");

const pai = elemento4.parentNode;

console.log(pai);

// Obter o primeiro filho
const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

// Obter o último filho
const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);

// Manipulação de estrutura do DOM
const novoElemento = document.createElement("div");

novoElemento.textContent = "Aqui tem JavaScript!";

console.log(novoElemento);

document.body.insertBefore(novoElemento, pai); // vai inserir no corpo do documento, vai inserir o novoElemento antes do pai

document.body.removeChild(elementoPorId); // vai remover no corpo do documento, vai remover o elementoPorId

// Eventos

// click
const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  console.log("Botão clicado!");
});

// mouse
const elemento5 = document.querySelector("#meuFormulario");

elemento5.addEventListener("mouseover", () => {
  console.log("O mouse passou aqui!");
});

// teclado
const campoInput = document.querySelector("#meuInput");

campoInput.addEventListener("keydown", () => {
  console.log("Tecla pressionada!");
});

// formulário
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // ele não deixa o comportamento padrão do elemento acontecer -> no caso de formularios a pagina smp atualiza quando é enviado um form, ele n deixa isso acontecer mais

  console.log("form enviado!");
});

// propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", () => {
  console.log("Clique capturado no elemento pai");
}); // nesse caso como coloquei o evento no elemento pai ele também propagará para o elemento filho

// document.querySelector("#elementoFilho").addEventListener("click", () => {
//     console.log("Clique capturado no elemento filho");
// }) // nesse caso como coloquei o evento no elemento pai ele também propagará para o elemento filho -> irá retornar os dois eventos ao clicar no elemento filho.

// e como eliminar essa propagação?
document.querySelector("#elementoFilho").addEventListener("click", (event) => {
  // event.stopPropagation(); -> desabilitei para o tópico de Delegação de eventos funcionar
  console.log("Clique capturado no elemento filho");
}); // irá retornar só esse evento

// mais sobre o uso do preventDefault()
document.querySelector("#meuLink").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Clicou no link");
});

// Delegação de eventos
document.querySelector("#elementoPai").addEventListener("click", (event) => {
  console.log("Evento delegado para o filho");
});
