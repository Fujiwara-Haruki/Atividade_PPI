//lista de exercicios

function calcularMedia(){
    let b1 = Number((document.getElementById('bim1') as HTMLInputElement)["value"]);
    let b2 = Number((document.getElementById('bim2') as HTMLInputElement)["value"]);
    let b3 = Number((document.getElementById('bim3') as HTMLInputElement)["value"]);
    let b4 = Number((document.getElementById('bim4') as HTMLInputElement)["value"]);

    let media = (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3)/ 10;

    let resultado = document.getElementById('resultado');
    
    if (resultado){
        resultado.innerHTML = `Média: ${media}`;
        resultado.style.display = 'block';
    }
    else {
        alert("Erro! Verifique se todos os campos estão preenchidos");
    }
}