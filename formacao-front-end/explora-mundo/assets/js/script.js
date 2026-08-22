const menuBtn = document.querySelector('#menu-toggle');

const navContainer = document.querySelector('.nav-container');

const overlay = document.querySelector('#overlay');

function toggleMenu(){
    const isActive = navContainer.classList.toggle('active');
    menuBtn.classList.toggle('is-active');
    overlay.classList.toggle('active');

    document.body.style.overflow = isActive ? 'hidden' : 'auto';
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () =>{
        if(navContainer.classList.contains('active')){
            toggleMenu();
        }
    });
});



// accordion

document.querySelectorAll('.accordion-header').forEach(header =>{
    header.addEventListener('click', () =>{
        const item = header.parentElement;
        console.log(item);

        const estaAberto = item.classList.contains('active');
        console.log(estaAberto);
        // fecha todos os itens
        document.querySelectorAll('.item-accordion').forEach(outroItem => {
            outroItem.classList.remove('active');
            const outroIcone = outroItem.querySelector('i');
            outroIcone.style.transform = 'rotate(0deg)';
        });
        console.log(estaAberto);
        
        if(!estaAberto){
            item.classList.add('active');
            const icon = header.querySelector('i');
            icon.style.transform = 'rotate(180deg)'
        }

    });
});



const destinos = [
    {
        id:1,
        nome:'Fernado de Noronha',
        preco: 'R$ 3.200,00',
        cat:'praia',
        img:'../explora-mundo/assets/image/destino1.jpg'
    },
    {
        id:2,
        nome:'Gramado',
        preco: 'R$ 1.800,00',
        cat:'neve',
        img:'../explora-mundo/assets/image/destino2.jpg'
    },
    {
        id:3,
        nome:'New York',
        preco: 'R$ 7.900,00',
        cat:'cidade',
        img:'../explora-mundo/assets/image/destino3.jpg'
    },
    {
        id:4,
        nome:'Bonito',
        preco: 'R$ 2.500,00',
        cat:'campo',
        img:'../explora-mundo/assets/image/destino3.jpg'
    }
   
]

function renderizar(lista){
    const grid = document.getElementById('grid-container');

    grid.innerHTML = lista.map(d => 
        `
         <div class="card" data-category="${d.cat}">
                <img src="${d.img}" alt="">
                <div class="card-body">
                    <h3>${d.nome}</h3>
                    <p class="price">${d.preco}</p>
                    <button class="btn-primary" onclick="verDetalhes(${d.id})">Ver oferta</button>
                </div>
         </div>        
        `
    ).join('')
}

document.querySelectorAll('.cat-item').forEach(item =>{
    item.addEventListener('click', () =>{
        const filter = item.getAttribute('data-filter');
        const filtrados = destinos.filter(d => d.cat === filter);
        renderizar(filtrados);
    });
});

function verDetalhes(id){
    window.location.href = `destino.html?id=${id}`
}

renderizar(destinos)


