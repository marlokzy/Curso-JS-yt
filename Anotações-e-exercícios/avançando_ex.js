// 1 - Manipulação de Array
// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.

const compras = [];

compras.push("Tênis", "Celular", "Camisa", "Calça", "Notebook");

compras.shift();

console.log(compras);

// 2 - Manipulação de Array - find()
// Vocês tem um array de números: [3, 7, 14, 21, 29, 36, 42]
// Use a a função find() para encontrar o primeiro número que é divisivel por 7
// e maior que 10.

const number = [3, 7, 14, 21, 29, 36, 42];

const numberFind = number.find((num) => num % 7 === 0 && num > 10);

console.log(numberFind);

// 3 - Manipulação de Array - filter()
// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40].
// Use a função filter() para criar um novo array que contenha apenas os números
// que são maiores que 20.

const number2 = [5, 10, 15, 20, 25, 30, 35, 40];

const numberFilter = number2.filter((num) => num > 20);

console.log(numberFilter);

// Manipulação de String - split(), trim()
// Dada a string: " Bom dia, mundo!  ".
// Remova os espaços em branco no inicio e no final da string
// em seguida, divida a string em palavras.

const string = " Bom dia, mundo!  ";

const stringModificada = string.trim().split(" ");

console.log(stringModificada);

// Manipulação de String - startsWith(), endsWith()
// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".

const palavra = "O rato roeu a roupa do rei de Roma";

const palavraInicio = palavra.startsWith("O");
console.log(palavraInicio);

const palavraFinal = palavra.endsWith("Roma");
console.log(palavraFinal);
