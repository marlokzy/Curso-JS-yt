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

// Navegação entre nós




