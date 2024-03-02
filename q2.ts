//questão 2 
let m: number;
let c: number = +prompt("Qual é o capital inicial?");
let i: number = +prompt("Qual é a taxa de juros? (Valor em Decimal)");
let n: number = 240;

m = c * (1 + i)**n;

document.write(`O valor depois de 240 meses é: ${m}`); 