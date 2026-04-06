// // Declarações e variáveis 
// //var, let, const

// var nome = "Fiap";
// console.log(nome);

// var nome = "Teste";
// console.log(nome);

// if(true){
//     let apelido = "Fiapinho";
//     console.log(apelido);
// }

// const taxaJuros = 0.05;
// console.log(taxaJuros);
// // taxaJuros = 1.5;

// //typeof - verifica o tipo da variável
// var exemplo = "ola-dev-var";
// console.log(exemplo);

// let exemplo1 = "ola-dev-let";
// console.log(exemplo1);

// const exemplo2 = "ola-dev-const";
// console.log(exemplo2);

// let exemplo3 = 10;
// console.log(typeof exemplo3);

// let exemplo4 = true;
// console.log(typeof  exemplo4);

// let exemplo5 = {nome1: "teste"};
// console.log(exemplo5)

// let exemplo6 = ["Java", "C#", "PHP"];
// console.log(exemplo6);

// //valor undefined
// let exemplo7;
// console.log(exemplo7);

// //valor vazio
// let exemplo8 = null;
// console.log(exemplo8);

// // OPERADORES ARITMÉTICOS

// const valor1 = 10;
// const valor2 = 20;

// console.log(valor1 + valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);
// console.log(valor1 / valor2);

// // OPERADORES LÓGICOS
// // = atribuição
// // == comparação
// /// === valor e tipo (estriatmente iguais)
// // && = E (todas condições tem que ser verdadeiras)
// // || = OU (uma das condições tem que ser verdadeira)
// // {} - Objeto
// // [] - Array
// // () - Método

// console.log(valor1 < valor2);
// console.log(valor1 > valor2 && valor2 > 10); //As duas tem que ser verdadeiras
// console.log(valor1 > 100 || valor2 > 10); //Só uma precisa ser verdadeira
// console.log(valor1 == valor2);
// console.log(valor2 === valor1);

// //Exercício 1
// let p = valor2
// let v = valor1
// let precoFinal = valor2 - valor1
// console.log("O preço final com desconto é", precoFinal)

// //Exercício 2 
// let a = 20
// let b = 10

// if(a === 20 && b >= 10){
//     console.log(true)
// } else{
//     console.log(false)
// }

// //Exercício 3 
// let userLogin = true;
// let userToken = true;

// if (userLogin == true && userToken == true){
//     console.log("Transação aprovada")
// }

//Estrutura Condicional

//if

if(true){
    console.log('Verdadeiro')
}

let nome = 'fiap';

if(nome == 'fiap'){
    console.log('Nome correto!')
}

// if/else

if(nome == 'fiap'){
    console.log('Usuário correto')
} else {
    console.log('Usuário errado')
}

// if encadeado/aninhado
 
let idade = 18;

if(idade <= 13){
    console.log('É uma criança')
}else if (idade > 13 && idade <18){
    console.log('É um adolescente')
}else if (idade >= 18 && idade < 60){
    console.log('É um adulto')
}else {
    console.log('É um idoso')
}

//Console.log (.log é o método/ tal qual window.alert; .alert é o método)

// Switch Case

let pratos = 'lasanha'

switch(pratos){
    case 'macarrao':
        console.log('A melhor massa.')
        break;
    case 'salada':
        console.log('Salada saudável.')
        break;
    case 'lasanha':
        console.log('Melhor prato.')
        break;
    default:
        console.log('Nenhuma das opções.')
}

// ternário

let valor = 100;
let resultado = valor == 100 ? 'Valor certo' : 'Valor errado';
console.log(resultado)

// ? = if | : = else

let usuario = 'dev';
let logado = usuario == 'dev' ? 'Usuário logado' : 'Usuário invalido';
console.log(logado)

// estrutura de repetição

//O laço de repetição é utilizado quando sabemos quantas vezes o 
//o código vai ser utilizado

for(let i=1; i<=5;i++){
    console.log('valor', i);
}

// let i=1 (declaração) | i<=5 (operação) | i++ (incremento)

const linguagens = ['Java', 'Python', 'C#', 'PHP'];

for(let i=0; i<linguagens.length; i++){
    console.log('Linguagem', i, ':',linguagens[i])
}

const tecnologias = ['JS', 'HTML', 'CSS'];

for(let tec of tecnologias){
    console.log('Estudando:', tec)
}

const carros = {marca:'Volks', modelo:'Fusca', ano: 1980};

for (let dados in carros){
    console.log(dados, ':', carros[dados])
}

// while - usamos quando não sabemos a quantidade de vezes
let numero = 1;

while (numero <= 10){
    console.log('contagem', numero);
    numero++;
}

//variável indefinida
let num;
//enquanto o número não for 0, ele continua rodando.
while (num !== '0'){
    num = prompt('Digite um número ou 0 para sair')
    console.log('Você digitou', num)
}

