//Questão 3
let data1 = new Date(prompt("Escreva a primeira data, ex: 10/10/2014. (Precisa ser menor do que a segunda)"));
let data2 = new Date(prompt("Escreva a segunda data, ex: 10/10/2014. (Precisa ser maior do que a segunda)"));
let ano1 = data1.getFullYear();
let ano2 = data2.getFullYear();
let anosPassados = ano2 - ano1;
if (ano1 >= ano2) {
    alert("A primeira data precisa ser menor do que a segunda");
    location.reload(); //recarregar a página
}
document.write(`A quantidade de anos que se passaram entre ${ano1} e ${ano2} é de ${anosPassados} anos.`);
