// Exercícios de fundamentos de JS

// 1 - Crie um script que imprima "Olá, mundo!" no console.
console.log("Olá, mundo!");

// 2 - Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console.
const numero = "1234";
console.log(typeof numero);

const numeroConvertido = Number(numero);
console.log(typeof numeroConvertido);

// 3 - Dado uma string "JavaScript é incrivel", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.
const minhaString = "JavaScript é incrivel";
const numeroCaracteres = minhaString.length; // conta quantos caracteres tem na string
const numeroPalavras = minhaString.split(" ").length; // conta quantas palavras tem na string

console.log("A quantidade de caracteres contidas na frase é: "+ numeroCaracteres);

console.log("A quantidade de palavras contidas na frase é: "+ numeroPalavras);

// 4 - Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.
const nomes = ["Isa", "Fabio", "Ivan", "Pablo", "Maria"];
// console.log(nomes.length);
// console.log(nomes[0]);
for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

// 5 - continuar fzd os ex's -> 1:25:20