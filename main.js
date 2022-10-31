/*--- menu mobile ---*/
const MENU = document.querySelector('#menu-mobile')
const ICONE_MENU = document.querySelector('.icone-menu')
const EXIT = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

/*--- interesses ---*/
const LISTA_INTERESSES = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-mario': 'Super Mario World e Zelda marcaram minha infância! Amo as hacks do Super Luigi e God of War me fez ser apaixonada por História Antiga!',
    'interesse-serie': 'É difícil escolher minha série favorita, então aqui vai meu TOP 3: Breaking Bad, The Office e Outlander!',
    'interesse-pokemon': 'Adoro Pokémon! Os meus favoritos são o Jigglypuff e o Psyduck.',
    'interesse-aviao': 'Sou apaixonada por viagens de aventura! Um dos lugares mais lindos que conheci foi a Amazônia e meu sonho é ir ao Monte Everest!',
    'interesse-passaro': 'Minhas aves favoritas são a Arara Canindé e o Sabiá-Laranjeira que tem um canto muito bonito!'
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}

