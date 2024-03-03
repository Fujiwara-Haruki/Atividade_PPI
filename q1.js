//lista de exercicios
function calcularMedia() {
    var b1 = Number(document.getElementById('bim1')["value"]);
    var b2 = Number(document.getElementById('bim2')["value"]);
    var b3 = Number(document.getElementById('bim3')["value"]);
    var b4 = Number(document.getElementById('bim4')["value"]);
    var media = (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10;
    var resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.innerHTML = "M\u00E9dia: ".concat(media);
        resultado.style.display = 'block';
    }
    else {
        alert("Erro! Verifique se todos os campos estão preenchidos");
    }
}
