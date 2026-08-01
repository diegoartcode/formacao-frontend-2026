// faz um requisição para buscar o arquivo "dados.json"
fetch('dados.json')
    // Quando a resposta chegar, converte o conteudo para JSON
    .then(resposta => resposta.json())
    // recebe os dados convertidos
    // nesse caso espera que pessoas seja uma lista de objetos
    .then(pessoas => {
        // cria uma variavel vazia para receber html
        let html = ""

        // percorre cada pessoa presente na lista
        pessoas.forEach(pessoa => {
            
            // adiciona um novo parágrafo a variavel html
            
            html += `
            <p>
                Id: ${pessoa.id}
                Nome: ${pessoa.nome}
                Idade: ${pessoa.idade}
            </p>
            `;
        });

        document.body.innerHTML += html

    })

