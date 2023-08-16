// ES6+ => versão do Javascript
// ES40 => nem todos os navegadores sejam compatíveis

// let e const 
let n = 10;
n = 20;

const x = 15;

const testeVar = ()=> {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

testeVar();

const testeLet = ()=> {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

testeLet();
// Quando falamos de let e const as chaves sempre separam os blocos

// arrow function
const soma = (a, b) => a + b;
console.log(soma(5,3));

const quadrado = (numero) => numero * numero;
console.log(quadrado(4));

const cumprimento = (nome) => {
    const mensagem = `Olá, ${nome}!`;
    return mensagem;
}
console.log(cumprimento("Marlon"));

// Template literals
const nome = "Marlon";
const idade = 20;

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos!`);

// Destructuring -> desestruturação
const pessoa = {nome: "Marlon", idade: 20, profissão: "Programador"}

const {nome: nome2, idade: idade2, profissão} = pessoa;

console.log(nome2, profissão);

const numeros = [1, 2, 3, 4];

const [primeiro, segundo, terceiro] = numeros;

console.log(primeiro, segundo, terceiro);

// spread operator => espalhamento
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2);

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0);

console.log(soma2(1, 2, 3, 4, 5, 6, 7));

// default parametros
function saudacao(nome = "visitante") {
    console.log(`Olá, ${nome}!`);
}
saudacao();
saudacao("Marlon");

// object literals enhancements
// {nome: "Marlon"}

const nomeNovo = "Felipe";
const idadeNova = 23;

// const pessoaNova = {nomeNovo, idadeNova};// assim vai criar um objeto com o nome da variavel
const pessoaNova = {nome: nomeNovo, idade: idadeNova};

console.log(pessoaNova);

const saudacaoObject = {
    dizerOi(){
        console.log("Oi");
    },
};

saudacaoObject.dizerOi();

// classes e heranças
class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(`Olá pessoal, meu nome é ${this.nome}`);
    }
}
//
const marlon = new Pessoa("Marlon", 20);
console.log(marlon);

marlon.falar();

const Pedro = new Pessoa("Pedro", 30);

class Funcionario extends Pessoa {
    constructor(nome, idade, salario){
        super(nome, idade);
        this.salario = salario;
    }

    falarFuncionario(){
        super.falar();
        console.log(`Eu ganho R$${this.salario}`);
    }
}

const mario = new Funcionario("Mario", 28, 3200);
console.log(mario);

mario.falar();

mario.falarFuncionario();