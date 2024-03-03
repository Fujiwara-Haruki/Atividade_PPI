function calcularAluguel() {
    var nome = String(document.getElementById('nome')["value"]);
    var dias = Number(document.getElementById('dias')["value"]);
    var resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.innerHTML = "Informamos que ".concat(nome, " dever\u00E1 pagar uma quantia de R$").concat(dias * 80, " pelo aluguel do apartamento no per\u00EDodo de ").concat(dias, " dias");
        resultado.style.display = 'block';
    }
    else {
        alert("Erro! Verifique se todos os campos estão preenchidos");
    }
}
