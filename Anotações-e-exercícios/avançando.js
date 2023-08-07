// Avançando em Javascript

// Manipulação de arrays
const frutas = ["Maçã", "Laranja"];

frutas.push("Banana"); // adc itens no final do array
frutas.unshift("Acerola"); // adc itens no começo do array
frutas.shift(); // remove o primeiro item do array
frutas.pop(); // remove o último item do array

console.log(frutas);

// map, filter, reduce -> arrow function
const numeros = [1, 2, 3, 4, 5, 6];

// find => retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0);

console.log(numeroPar);

// filter => retorna todos os elementos que batem com o critério
const numerosPares = numeros.filter((num) => num % 2 === 0);

console.log(numerosPares);

// Manipulação de strings
const frase = " Olá, mundo! ";
const palavra = frase.trim(); // remove os espaços indesejados da frase, antes e depois

console.log(frase);
console.log(palavra);

const frase2 = "Javascript é incrível!";

// metódos para identificar padrões no incio e no fim da frase/palavra
console.log(frase2.startsWith("Java")); // identifica se no começo da frase tem "Java" escrito, se tiver retorna true, se não false
console.log(frase2.endsWith("ível!")); // identifica se no final da frase tem "ível!" escrito, se tiver retorna true, se não false

// Exceções e tratamentos de erros

const idade = 15;

// if (idade < 18) {
//   throw new Error("Você deve ter pelo menos 18 anos!"); // se a condição for verdadeira, vai dar uma mensagem de erro escrito "Você deve ter pelo menos 18 anos!" e logo em seguida encerrará a execução do programa, assim não permitindo que o programa continue.
// }

// console.log("Continuando o programa"); // esse comando ñ será executado por causa da situação anterior

try {
  const idade = 15;

  if (idade < 18) {
    throw new Error("Você deve ter pelo menos 18 anos!");
  }
} catch (error) {
  console.log(error.message); // esse .message faz com que só execute a escrita e tire os complementos do erro
}

console.log("Continuando o programa...");

// Callback => função dentro de outra função
function cumprimentar(nome, callback) {
  console.log("Olá, " + nome);
  callback();
}

// function mostrarSaudacao() {
//     console.log("Como você está?");
// }

// cumprimentar("Marlon", mostrarSaudacao);

// ou tmb pode ser escrito assim:
cumprimentar("Marlon", function () {
  console.log("Tá tudo bem?");
});

// // setTimeout => dps de um tempo executa algo, uma vez
// function mostrarMensagem() {
//     console.log("Essa mensagem será exibida após 3 segundos.");
// }

// // 1000ms = 1s
// setTimeout(mostrarMensagem, 3000);

// // ou tmb pode ser escrito assim:
// setTimeout(() => {
//     console.log("Oi");
// }, 1000);

// Promises
const promessa = new Promise((resolve, reject) => {
  const condicao = false;

  if (condicao) {
    resolve("A condição é verdadeira!");
  } else {
    reject("A condição é falsa!");
  }
});

promessa
  .then((mensagem) => { // método then irá executar a promessa
    console.log(mensagem); // se a promessa for verdadeira irá executar a mensagem da condição verdadeira
  })
  .catch((erro) => {
    console.log(erro); // se a promessa for falsa irá executar a mensagem da condição falsa
  });


// Biliotecas feitas que são "promise based"

const promise1 = Promise.resolve(3); // essa foi instantenea
const promise2 = new Promise((resolve, reject) => { // essa demorou 2,5s
    setTimeout(resolve, 2500, "Testando");
});

Promise.all([promise1, promise2]).then((valores) => console.log(valores)); // all vai fazer com que os dois promises sejam executados ao mesmo tempo, então vai pegar o promise que tem mais tempo p ser executado e usar seu tempo, no caso pegou do promise2 -> 2,5s


//Async Await
async function obterValor() {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Valor obtido");
        }, 2000);
});

const valor = await promessa; // ao colocar await aqui ele vai esperar isso chegar para executar o comando de baixo

console.log(valor);
}

obterValor(); // vai aparecer promisse pending ou seja eu acessei o valor da promessa antes que ela tenha se concretizada, então não tinha valor ali ainda.

async function obterValorComErro() {
    try {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Valor com erro");
            }, 2000);
    });

    const valor = await promessa;

    console.log(valor);
      } catch (error) {
        console.log(error); 
      }
    
}

obterValorComErro();

// JSON (JavaScript Object Notation)
// {nome: "teste"} => {"nome:" "teste"}
// Padroniza a comunicação
// front-end e back-end em uma linguagem só

// aqui nesse comando ele vai pegar o que tem no objeto e transformar em string para assim acontecer a comunicação
// isso é o que vai ser mandado para o servidor
const objeto = {nome: "Joao", idade: 30};

const jsonString = JSON.stringify(objeto);

console.log(jsonString);
console.log(typeof jsonString);

// isso vai ser o que a gente vai receber em JSON
const json = '{ "nome": "Joao", "idade": 30 }';

// // e se eu quiser acessar json.nome ñ vou conseguir
// console.log(json.nome); // vai dar undefined

// então eu tenho que fazer a conversão
const objeto2 = JSON.parse(json);

console.log(objeto2);


