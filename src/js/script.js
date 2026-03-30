// Declarações e variáveis 
//var, let, const

var nome = "Fiap";
console.log(nome);

var nome = "Teste";
console.log(nome);

if(true){
    let apelido = "Fiapinho";
    console.log(apelido);
}

const taxaJuros = 0.05;
console.log(taxaJuros);
// taxaJuros = 1.5;

//typeof - verifica o tipo da variável
var exemplo = "ola-dev-var";
console.log(exemplo);

let exemplo1 = "ola-dev-let";
console.log(exemplo1);

const exemplo2 = "ola-dev-const";
console.log(exemplo2);

let exemplo3 = 10;
console.log(typeof exemplo3);

let exemplo4 = true;
console.log(typeof  exemplo4);

let exemplo5 = {nome1: "teste"};
console.log(exemplo5)

let exemplo6 = ["Java", "C#", "PHP"];
console.log(exemplo6);

//valor undefined
let exemplo7;
console.log(exemplo7);

//valor vazio
let exemplo8 = null;
console.log(exemplo8);

// OPERADORES ARITMÉTICOS

const valor1 = 10;
const valor2 = 20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

// OPERADORES LÓGICOS
// = atribuição
// == comparação
/// === valor e tipo (estriatmente iguais)
// && = E (todas condições tem que ser verdadeiras)
// || = OU (uma das condições tem que ser verdadeira)
// {} - Objeto
// [] - Array
// () - Método

console.log(valor1 < valor2);
console.log(valor1 > valor2 && valor2 > 10); //As duas tem que ser verdadeiras
console.log(valor1 > 100 || valor2 > 10); //Só uma precisa ser verdadeira
console.log(valor1 == valor2);
console.log(valor2 === valor1);

