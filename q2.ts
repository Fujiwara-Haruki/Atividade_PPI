//questão 2 

function calcularJuros(){
    let m: number;
    let c = Number((document.getElementById("capital") as HTMLInputElement)["value"]);
    let i = Number((document.getElementById("juros") as HTMLInputElement)["value"]);
    let n = 240;

    m = c * (1 + i)**n;

    let resultado = document.getElementById('resultado');

    if (resultado){
        resultado.innerHTML = `O valor depois de 240 meses é: ${m}`;
        resultado.style.display = 'block';
    }
    else{
        alert("Erro! Verifique se todos os campos estão preenchidos");
    }
}