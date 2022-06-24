//INTRODUÇÃO JS - OPERAÇÕES MATEMATICAS/IF-ELSE/SWITCH CASE

const valor1 = 5;
const valor2 = 10;

let soma = valor1 + valor2; 
console.log(soma);

let subtração = valor1 - valor2;
console.log(subtração);

let multiplicação = valor1 * valor2;
console.log(multiplicação);

let divisão = valor1 / valor2;
console.log(divisão);

let modulo = valor1 % valor2;
console.log(modulo);

let x = 100;

if (x > 100) {
    console.log("Wins");
} 

else if(x == 100) { 
    console.log("Equal")
}

else  { 
    console.log("Lose");
}

let Time = "Flamengo";

switch(Time) {
    case "Roma":
        console.log("Campeão")
        break;
    case "Milan":
        console.log("Vice")
        break;
    case "Juventus":
        console.log("Vice do vice")
        break;
    case "Lazio":
        console.log("You Lose")
        break;  
    default:
        console.log("Ta no Brasil")          
}

let number = 21;
let numero = 22;

let comparacao = number < numero;
//console.log(comparacao);

isEven = ((number + numero) % 2 ) == 0;
console.log(isEven)

const compra = 50;
const venda = 100;
const imposto = 20;
const lucro = 40000;

const result = (compra/100)* imposto;
console.log(result)

const valorcompra = (compra + 10);
console.log(valorcompra)

const valorvenda = (venda - 60);
console.log(valorvenda)

const ganho = (valorvenda * 1000);
console.log(ganho)

if (lucro < 0) {
    console.log("Error")
} else {
    console.log("We achieved")
}

let salario = 3000;
let inss = 11;
let ir = 7.5;
let valorDes = 142.80;

let totalInss = (salario/ 100)* inss;
console.log(totalInss);
salario = salario - totalInss;
console.log(salario);

let totalIr =(salario/ 100)* ir;
console.log(totalIr)

let descontos = (totalIr - valorDes);
console.log(descontos)

let valorfinal = (salario - descontos);
console.log(valorfinal);

//JAVA SCRIPT ARRAYS E FOR 
let cardapio = ["Peixe", "Carne", "Frango"];
let indexOfCarne = cardapio.indexOf("Carne") ;
let cardapioCarne = cardapio[1];
cardapio.push("Salsicha")

console.log("Menu de acompanhamentos: ", cardapio);
console.log(cardapioCarne);
console.log(indexOfCarne);

let academia = ['Creatina','Whey Protein', "BCA"];

for (let index = 0; index < academia.length; index +=1) {
    let messagem = "Pré Treino bateuuu!"  + academia[index] + "!";
    console.log(messagem,);
}

let numbers = [9, 7, 5, 10, 15];

numbers.sort((a, b) => a - b) ;
console.log(numbers);

let somar = (9 + 7 + 5 + 10 + 15)
console.log(somar)

let dividir = (somar / 5);
console.log(dividir)

if (dividir > 25) {
    console.log("maior que 25")
} else{
    console.log("menor que 25")
}
let n =  [9, 7, 5, 10, 15, 50, 35];
let numeroMaior = 0;
for (i = 0; i < n.length; i += 1)  {
 if ( numeroMaior < n[i])
   numeroMaior = n[i]

}
console.log(numeroMaior)

let somaNumero = [9, 7, 5, 10, 15, 50, 35];
let somatorio = 0;

for (let i  = 0; i < somaNumero.length; i += 1) {
    somatorio += somaNumero[i];
}

console.log(somatorio)

if (somatorio > 100) {
    console.log("Wins");
} else {
    console.log('Loser')
}


let menor =  [9, 7, 5, 10, 15, 50, 35];
let numeroMenor = 1000;

for (i = 0; i < menor.length; i += 1) {
    if (numeroMenor > menor[i] )
    numeroMenor = menor[i];
}
console.log(numeroMenor)

//JAVA SCRIPT LÓGICA DE PROGRAMAÇÃO E ALGORITMOS




























