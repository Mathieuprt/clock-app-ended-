// Gestion de la partie infos

const buttonInfos = document.getElementById('button-more')
const infoSection = document.getElementById('infos-section')
const quoteSection = document.getElementById('quote-section')
const clockSection = document.getElementById('clock-section')

buttonInfos.addEventListener('click', () =>{

    buttonInfos.classList.toggle('opened')

    if (buttonInfos.classList.contains('opened')){
        buttonInfos.innerText ='Less'
    } else {
        buttonInfos.innerText = 'More'
    }

    quoteSection.classList.toggle('hidden')
    clockSection.classList.toggle('moved')
    infoSection.classList.toggle('show')
})

// Modification de la phrase de bienvenue

const clockTitle = document.getElementById('clock-section__heading');

