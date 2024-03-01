//questão 2 
let m;
let c = +prompt("Qual é o capital inicial?");
let i = +prompt("Qual é a taxa de juros? (Valor em Decimal)");
let n = 240;
m = c * (1 + i) ** n;
document.write(`O valor depois de 240 meses é: ${m}`);
