//Questão 3
function calcularAnos(){

    let data1: Date = new Date((document.getElementById('ano1') as HTMLInputElement)["value"]);
    let data2: Date = new Date((document.getElementById('ano2') as HTMLInputElement)["value"]);


    let ano1 = data1.getFullYear();
    let ano2 = data2.getFullYear();

    let anosPassados = ano2 - ano1;

    if (ano1 >= ano2){
        alert("A primeira data precisa ser menor do que a segunda");
    }
    else {
        let resultado = document.getElementById("resultado");
        
        if (resultado){
            resultado.innerHTML = `A quantidade de anos que se passaram entre ${ano1} e ${ano2} é de ${anosPassados} anos.`
            resultado.style.display = 'block';
        }
        else{
            alert('Erro! Verifique se todos os campos estão preenchidos');
        }
    }

}