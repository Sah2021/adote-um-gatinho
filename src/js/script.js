const gatos = document.querySelectorAll('.gato')

gatos.forEach ((gato) => {
  gato.addEventListener('mouseenter', () => {
    if(window.innerWidth < 450){
      window.scrollTo({top:0, behavior: 'smooth'
    })
  }

    const gatoSelecionado = document.querySelector('.selecionado');
    gatoSelecionado.classList.remove('selecionado')
    gato.classList.add('selecionado');

    const imagemGatoGrande = document.querySelector('.gato-grande')

    const idGato = gato.attributes.id.value;
    imagemGatoGrande.src = `./src/imagens/card-${idGato}.png`

    const nomeGato = document.getElementById('nome-gato')
    nomeGato.innerText = gato.getAttribute('data-name')

    const descricaoGato = document.getElementById('descricao-gato')
    descricaoGato.innerText = gato.getAttribute('data-description')
})   
  
})