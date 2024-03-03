
function calcularAluguel(){

    let nome = String((document.getElementById('nome') as HTMLInputElement)["value"]); 
    let dias = Number((document.getElementById('dias') as HTMLInputElement)["value"]);

    let resultado = document.getElementById('resultado');

    if (resultado){
        resultado.innerHTML = `Informamos que ${nome} deverá pagar uma quantia de R$${dias * 80} pelo aluguel do apartamento no período de ${dias} dias`; 
        resultado.style.display = 'block';
    }
    else {
        alert("Erro! Verifique se todos os campos estão preenchidos");
    }


}