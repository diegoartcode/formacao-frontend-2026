// const paragrafo = document.getElementById('paragrafo');

// console.log(paragrafo);

// // adicionar uma classe
// paragrafo.classList.add('destaque');

// // remover uma classe
// paragrafo.classList.remove('destaque');

// // alternar (toggle): adiciona se não existe, remove se já existe
// paragrafo.classList.toggle('destaque');

// // verificar se a classe existe
// console.log(paragrafo.classList.contains('destaque')); // true - false




// curtir

const btn = document.querySelector('button');
console.log(btn)

// btn.addEventListener('click',function (){    
// })

btn.addEventListener('click',() => {
    btn.classList.toggle('curtido');

    // const curtido = btn.classList.contains('curtido');

    // if(curtido == true){
    //     btn.textContent = 'Curtido';
    // }else{
    //     btn.textContent = 'Curtir';
    // }

    btn.textContent = btn.classList.contains('curtido') ? 'Curtido' : 'Curtir';
})