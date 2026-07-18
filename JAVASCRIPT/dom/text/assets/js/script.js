const texto1 = document.querySelector('#texto1');
console.log(texto1)
// textContent 
// O textContent lê ou altera somente o texto do elemento
// se existir HTML dentro dele, esse HTML será tratado como texto comum

console.log(texto1.textContent)

texto1.textContent = '<strong>Bem-vindo</strong> ao Javascript com textContent &#128077;';

const texto2 = document.querySelector('#texto2');

// innerHTML
// O innerHTML interpreta HTML

texto2.innerHTML = '<strong>Bem-vindo</strong> ao Javascript com textContent &#128077;' ;

// innerText
// O innerText é parecido com o textContent, mas considera apenas o texto visivel na pagina

const texto3 = document.querySelector('#texto3');

console.log(texto3)

console.log(texto3.textContent)
console.log(texto3.innerText)





