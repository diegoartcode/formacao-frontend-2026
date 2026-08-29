const botao = document.getElementById('gerar');

botao.addEventListener('click',gerarQRCode);

function gerarQRCode(){
    const texto = document.getElementById('texto').value;

    const imagem = document.getElementById('qrcode');


    const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(texto)}`;

    console.log(url)

    imagem.src = url;
}