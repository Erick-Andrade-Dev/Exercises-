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

let cardapio = ["Peixe", "Carne", "Frango"];
let indexOfCarne = cardapio.indexOf("Carne") ;
let cardapioCarne = cardapio[1];
cardapio.push("Salsicha")

console.log("Menu de acompanhamentos: ", cardapio);
console.log(cardapioCarne);
console.log(indexOfCarne);

































