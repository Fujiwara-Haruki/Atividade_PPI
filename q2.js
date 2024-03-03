//questão 2 
function calcularJuros() {
    var m;
    var c = Number(document.getElementById("capital")["value"]);
    var i = Number(document.getElementById("juros")["value"]);
    var n = 240;
    m = c * Math.pow((1 + i), n);
    var resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.innerHTML = "O valor depois de 240 meses \u00E9: ".concat(m);
        resultado.style.display = 'block';
    }
    else {
        alert("Erro! Verifique se todos os campos estão preenchidos");
    }
}
