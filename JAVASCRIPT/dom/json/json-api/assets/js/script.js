
// produra no html o elemento que possui id = 'lista-produto'
const listaProduto = document.getElementById('lista-produtos');

if(listaProduto){

// fetch() faz um requisição http
fetch('https://fakestoreapi.com/products')
    // O fetch retorna uma resposta
    // resposta.json() transfoma essa resposta em um objeto javascript
    .then(resposta => resposta.json())
    // depois que os dados forem convertidos, eles ficam disponivel 'data'
    // 'data' sera um array contendo varios produtos
    .then(data => {
        console.log(data)

        



        // forEach percorre todos os produtos do array
        data.forEach(produto => {

            // cria um novo elemento <li> usando o javascript 
            const produtoLi = document.createElement('li');

            // innerHTML permite criar conteudo HTML 

            produtoLi.innerHTML = `
            
            <li>
                <div class="produto">
                    <img src="${produto.image}" alt="${produto.title}">
                    <h3>${produto.title}</h3>
                    <p>R$ ${produto.price}</p>
                    <a href="produto.html?id=${produto.id}">Ver produto</a>
                </div>
            </li>
            
            `;

            // appendChild adiciona o <li> que acabamos de criar dentro da <ul>
            listaProduto.appendChild(produtoLi)
        });


    })
    .catch(erro =>{
       document.getElementById('erro').innerText = 'Erro ao carregar produtos';
       
       console.log(erro);
    });

}

const produtoImagem = document.getElementById('produto-imagem');

if(produtoImagem){
const url = new URLSearchParams(window.location.search);

console.log(url);

const produtoId = url.get('id');
console.log(produtoId);

if(produtoId){
    fetch(`https://fakestoreapi.com/products/${produtoId}`)
        .then(resposta => resposta.json())
        .then(data => {
            console.log(data)


            document.getElementById('produto-imagem').src = data.image;
            document.getElementById('produto-titulo').innerText = data.title;
            document.getElementById('produto-descricao').innerText = data.description;
            document.getElementById('produto-preco').innerText = 
            `R$ ${data.price}`;    
        })
        .catch(erro =>{
            console.log('Erro ao carregar o produto')
            console.log(erro)
        })
}

}