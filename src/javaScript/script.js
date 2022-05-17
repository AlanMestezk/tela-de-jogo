/*
Objetivo 1:
    - colocar a classe selecionada no personagem
    que passamos o mouse em cima, para adicionar 
    a animação

    -retirar a classe selecionado do personagem 
    que esta selecionado 

Objetivo 2:
    -trocar a imagem e o nome do personagem
    quando passar o mouse em cima
*/ 

const personagens = document.querySelectorAll('.personagem')

personagens.forEach(
    (personagem) =>{
       personagem.addEventListener('mouseenter', ()=>{

           const idSelecionado = personagem.attributes.id.value

           if(idSelecionado === 'ultron')
            return;
           

           const personagemSelecionado = document.querySelector('.selecionado')
           personagemSelecionado.classList.remove('selecionado')

           personagem.classList.add('selecionado')

           
           const imagemJogador1 = document.getElementById('personagem-jogador-1')
           imagemJogador1.src = `./src/img/${idSelecionado}.png` 

           const nomeJogador1 = document.getElementById('nome-jogador-1')
           const nomeSelecionado = personagem.getAttribute('data-name')
           nomeJogador1.innerHTML = nomeSelecionado
           
       })
    }
)




