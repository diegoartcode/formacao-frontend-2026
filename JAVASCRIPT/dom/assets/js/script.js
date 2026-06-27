// alert('teste')




function mensagem() {
    let titulo = document.getElementById('titulo');
    titulo.innerText = "O que é DOM?";
    titulo.style.color = "#883399";
    titulo.style.fontFamily = "Arial, Helvetica, sans-serif";
    titulo.style.fontSize = '60px';
    console.log(titulo);
}

num1 = document.getElementById('num1');
num2 = document.getElementById('num2');

resultado = document.getElementById('resultado');

function soma(){
    calculo = parseFloat(num1.value) + parseFloat(num2.value);
    resultado.innerText = calculo;
}







// console.log(document)