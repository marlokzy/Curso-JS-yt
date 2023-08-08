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

// continuar em 2:47:53 - com eventos em formulários





