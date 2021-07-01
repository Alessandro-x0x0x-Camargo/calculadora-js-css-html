

function inserir(numero) {
    let novoNumero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = novoNumero + numero;
}

function Limpar() {
    document.getElementById('resultado').innerHTML = "";
}


function Apague1() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
    
function calcule() {
    
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) 
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else 
    {
        document.getElementById('resultado').innerHTML = "";
    }

    
}
