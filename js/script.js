function  insert(num) {
    let numero = document.getElementById('tela-resultado').innerHTML;
    document.getElementById('tela-resultado').innerHTML = numero + num;

}

function limpar() {
    document.getElementById('tela-resultado').innerHTML ="";
}

function voltar() {
    let resultado = document.getElementById('tela-resultado').innerHTML;
    document.getElementById('tela-resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    let resultado = document.getElementById('tela-resultado').innerHTML;
    if(resultado) {
        document.getElementById('tela-resultado').innerHTML = eval(resultado)
    } else {
        window.alert("Olá, insira números para começar a calcular.")
        
    }
}