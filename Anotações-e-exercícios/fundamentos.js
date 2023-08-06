// fundamentos
var minhaVariavel= "Olá mundo 777!"

console.log(minhaVariavel);

// variáveis e tipos de dados

var meuNumero = 10;

console.log(meuNumero);

console.log(meuNumero + 5);

console.log("10" + 5);

console.log(typeof meuNumero);

var booleano = true; // or false

console.log(typeof booleano);

var meuObjeto = {}
var meuArray = []
var meuNull = null;
var meuUndefined = undefined;

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);
// tirando o undefined vai dar que todos são objetos mas não são

// let e const
// novas formas de declarar variáveis
let x = 10;
const y = 5;

// y = 10; // vai dar erro pq n dá para mudar o valor de uma variável constante
x = 5;

console.log(typeof x);

console.log(x, y);

// Operadores aritméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Operadores de comparação
console.log(x == y); // == -> igual
console.log(x != y); // != -> diferente

console.log("5" == 5);// vai dar true, ou seja erro do código pq n é igual

// sempre utilize dessa forma vai gerar mais confiabilidade ao seu código
console.log("5" === 5); // === -> igual em tudo até em seu tipo
console.log("5" !== 5); // !== -> diferente em tudo até em seu tipo

// Operadores lógicos
//AND &&
// OR ||

console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 < 5);

console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 < 5);

// Conversão de tipos

const meuNumero2 = "123"

const meuNumeroConvertido= Number(meuNumero2); // Number -> para converter em número

console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

// Estrutura de condição - if, else e else if

const idade = 19;

if (idade < 13) {
    console.log("Criança");
} else if (idade < 18) {
    console.log("Adolescente");
}else{
    console.log("Adulto");
}

// usando a lógica com os tipos boolenos
if (false) {
    console.log("Isso executa");
} else {
    console.log("Isso agora é executado");
}

// Switch

const fruta = "Banana"

switch (fruta) {
    case "Banana":
        console.log("Banana é a fruta!");
        break;

    case "Maçã":
        console.log("Maçã é a fruta!");
        break;    

    default:
        console.log("Fruta não encontrada!");
        break;
}

// Estruturas de repetição
// 1, 2, 3, 4, 5... => dependendo de uma condição

// for
// contador(valor inicial), condição de limite, incremento
for(let i = 0; i < 5; i = i + 1 /* ou i++ */) {
    // concatenação
    console.log("O valor de i é: "+ i);
}

// while

let k = 0;

while (k < 5) {
    console.log("O valor de k é: "+ k);
    k++;
}

// do while

let j = 0;

do {
    console.log("O valor de j é: "+ j);

    j++;
} while (j < 5);

// funções
//function nome(arg1, arg2) {corpo}

function cumprimentar(nome) {
    console.log("Olá, "+ nome);
}

// invocação = nome()
cumprimentar("Marlon");

// escopo de variáveis

let cor = "azul"; // escopo global

function mostrarCor() { // escopo local
    console.log("verde");
}

console.log(cor);// escopo global

mostrarCor(); // escopo local

// hoisting = içamento
// não importa se a função foi chamada antes de sua criação, contanto que ela exista chamará da mesma forma

testeHoisting();

function testeHoisting() {
    console.log("Deu tudo certo!");
    
}

// arrow function

const testeArrow = () => console.log("Isso também é uma função.");

testeArrow();

//truthy e falsy -> conceitos mais técnicos da linguagem
//no JS existem variáveis que são consideradas falsas e verdadeiras sem que sejam elas booleanas

const minhaVariavel1 = ""; // falsy -> no JS variável sem nada é considerada falsa
const minhaVariavel2 = "Algum texto"; // truthy -> no JS variável com algum texto é considerada verdadeira

if (minhaVariavel1) {
    console.log("Isso é verdadeiro");
} else {
    console.log("Isso é falso");
}

if (minhaVariavel2) {
    console.log("Isso é verdadeiro");
} else {
    console.log("Isso é falso");
}

// array, listas

const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

// se eu quiser acessar itens individualmente posso consultar o índice (o array ele sempre começa a contar do 0)
console.log(numeros[0]); // retornará o 1

console.log(numeros[2]); // retornará o 3

// como adiciono item no array?
// usando um método de array

// adiciono item
numeros.push(6);
console.log(numeros);

// removo item
numeros.pop();
console.log(numeros);

// strings
const minhaStringNova = "Olá, mundo!";

// concatenação = +
const minhaString3 = minhaStringNova + " Como você está?";

console.log(minhaString3);

// interpolação

const minhaString4 = `${minhaStringNova} Como você está?`; 
console.log(minhaString4);

console.log(minhaString4.length); // mostrará a quantidade de caracteres
console.log(minhaString4[5]);
console.log(minhaString4.toUpperCase());

// Data e hora 

const agora = Date(); // puxa a data completa de hoje
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);

// Math

console.log(Math.PI); // mostra o PI

console.log(Math.round(3.6)); // arrendonda para 4

console.log(Math.sqrt(16)); // mostra a raiz quadrada de 16

console.log(Math.pow(2, 3)); // mostra a potencia de 2 por 3
