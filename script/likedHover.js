const colors = {
    normal: 'linear-gradient(to bottom, rgb(117, 51, 17), #0c0c0c 30%)',
    yellow: 'linear-gradient(to bottom, rgb(117 77 17), #0c0c0c 30%)',
    blue: 'linear-gradient(rgb(21 53 111), rgb(12, 12, 12) 31%)',
    red: 'linear-gradient(rgb(195 36 1), rgb(12, 12, 12) 30%)',
    black: 'linear-gradient(rgb(0 5 41), rgb(12, 12, 12) 30%)',
    white: 'linear-gradient(rgb(96 100 125), rgb(12, 12, 12) 30%)',
    brown: 'linear-gradient(rgb(62 0 0), rgb(12, 12, 12) 31%)'
}

const musicLiked = document.querySelectorAll('.music-liked')
const inTrance = document.querySelector('.inTrance')
const fearOfTheDark = document.querySelector('.fearOfTheDark')
const michael = document.querySelector('.michael')
const metallica = document.querySelector('.metallica')
const audioSlave = document.querySelector('.audioSlave')
const guns = document.querySelector('.guns')


function alter(color) {
    const section = document.querySelector('.section-music')
    section.style.background = color
}

inTrance.addEventListener('mousemove', () => {
    alter(colors.yellow)
})

fearOfTheDark.addEventListener('mousemove', () => {
    alter(colors.blue)
})

michael.addEventListener('mousemove', () => {
    alter(colors.red)
})

metallica.addEventListener('mousemove', () => {
    alter(colors.black)
})

audioSlave.addEventListener('mousemove', () => {
    alter(colors.white)
})

guns.addEventListener('mousemove', () => {
    alter(colors.brown)
})