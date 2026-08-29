const canvas = document.getElementById('canvas-assinatura');

// Criamos o objeto responsavel por controlar a assinatura
const signaturePad = 
    new SignaturePad(canvas, {
        //espessura minima do traço
            minWidth: 1,
        // espessura maxima do traço
            maxWidth: 3,
        // cor da assinatura
            penColor: 'rgb(0,0,0)'
    });

// pegar o botão limpar

const btnLimpar = document.getElementById('limpar');

// criamos o evento de clique
btnLimpar.addEventListener('click', function (){
        // apaga a assinatura
        signaturePad.clear();

        document.getElementById('imagem-assinatura').src = ''
});

// pegar o botão salvar
const btnSalvar = document.getElementById('salvar');

// criamos o evendo de clique
btnSalvar.addEventListener('click', function (){

    // verificar se o usuario ainda não assinou
    if(signaturePad.isEmpty()){
        alert('Por favor, faça sua assinatura primeiro.')
    }else{
        // converter a assinatura para uma imagem PNG em Base64
        const assinatura = signaturePad.toDataURL('image/png');

        // mostra o Base64 no console
        console.log(assinatura);

        // pegar a tag img
        const imagem = document.getElementById('imagem-assinatura');

        // colocamos a assinatura dentro da tag de imagem
        imagem.src = assinatura

        alert('Assinatura salva com sucesso!')
    }
})