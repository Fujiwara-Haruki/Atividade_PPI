//Questão 3
function calcularAnos() {
    var data1 = new Date(document.getElementById('ano1')["value"]);
    var data2 = new Date(document.getElementById('ano2')["value"]);
    var ano1 = data1.getFullYear();
    var ano2 = data2.getFullYear();
    var anosPassados = ano2 - ano1;
    if (ano1 >= ano2) {
        alert("A primeira data precisa ser menor do que a segunda");
    }
    else {
        var resultado = document.getElementById("resultado");
        if (resultado) {
            resultado.innerHTML = "A quantidade de anos que se passaram entre ".concat(ano1, " e ").concat(ano2, " \u00E9 de ").concat(anosPassados, " anos.");
            resultado.style.display = 'block';
        }
        else {
            alert('Erro! Verifique se todos os campos estão preenchidos');
        }
    }
}
