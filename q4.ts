alert("Continue para finalizar o orçamento do aluguel. (preço do aluguel é de R$: 80,00 por dia)");

let nome: string = prompt("Qual é o seu nome?");
let dias: number = +prompt("Por quantos dias você vai alugar a casa?");

document.write(`Informamos que ${nome} deverá pagar uma quantia de R$${dias * 80} pelo aluguel do apartamento no período de ${dias} dias`);

