const btnScorpions = document.querySelector('#btnScorpions')
const btnIronMaden = document.querySelector('#btnIronMaden')
const btnMichael = document.querySelector('#btnMichael')
const btnMetallica = document.querySelector('#btnMetallica')
const btnAudioSlave = document.querySelector('#btnAudioSlave')
const btnGuns = document.querySelector('#btnGuns')
const play = document.querySelector('.play')
const paused = document.querySelector('.paused')
const musicLeft = document.querySelector('.music-left')
const musicRigth = document.querySelector('.music-rigth')
const initialPlaylist = document.querySelector('.initialPlaylist')

/*---------*/ 

function infoPlayer(music, artist, image, audio){

    const nameMusic = document.querySelector('.music')
    const imageMusic = document.querySelector('.imageMusic')
    const artistName = document.querySelector('.artist-name')
    const alterMusic = document.querySelector('#player')

    nameMusic.textContent = music
    artistName.textContent = artist
    imageMusic.src = image
    alterMusic.src = audio
    
    alterMusic.play()
    paused.style.display = "inline-block"
}

play.addEventListener('click', () =>{
    const alterMusic = document.querySelector('#player')
    if(alterMusic.src != ""){
        alterMusic.play()
        paused.style.display = "inline-block"
    }else{
        alert('Nenhuma música selecionada')
    }
})

paused.addEventListener('click', () =>{
    const alterMusic = document.querySelector('#player')
    alterMusic.pause()
    paused.style.display = "none"
})

btnScorpions.addEventListener('click', ()=>{
    infoPlayer(music.scorpions.music, music.scorpions.artist, 
        music.scorpions.image, music.scorpions.audio)
    playlistOn = false
})
btnIronMaden.addEventListener('click', ()=>{
    infoPlayer(music.ironMaden.music, music.ironMaden.artist, 
        music.ironMaden.image, music.ironMaden.audio)
    playlistOn = false
})
btnMichael.addEventListener('click', ()=>{
    infoPlayer(music.michael.music, music.michael.artist, 
        music.michael.image, music.michael.audio)
    playlistOn = false
})
btnMetallica.addEventListener('click', ()=>{
    infoPlayer(music.metallica.music, music.metallica.artist, 
        music.metallica.image, music.metallica.audio)
    playlistOn = false
})
btnAudioSlave.addEventListener('click', ()=>{
    infoPlayer(music.audioSlave.music, music.audioSlave.artist, 
        music.audioSlave.image, music.audioSlave.audio)
    playlistOn = false
})
btnGuns.addEventListener('click', ()=>{
    infoPlayer(music.guns.music, music.guns.artist, 
        music.guns.image, music.guns.audio)
    playlistOn = false
})

const alterMusic = document.querySelector('#player')
var x = -1 

alterMusic.addEventListener('ended', ()=>{
    x++
    if(playlistOn == true){
        if(x <= 4){
            infoPlayer(playlist2[x].music, playlist2[x].artist, playlist2[x].image,
                playlist2[x].audio)
        }else{
            x = 0
            infoPlayer(playlist2[x].music, playlist2[x].artist, playlist2[x].image,
                playlist2[x].audio)
        }
    }else{
        if(x <= 5){
            infoPlayer(playlist[x].music, playlist[x].artist, playlist[x].image,
                playlist[x].audio)
        }else{
            x = 0
            infoPlayer(playlist[x].music, playlist[x].artist, playlist[x].image,
                playlist[x].audio)
        }
    }
})

var playlistOn = false

initialPlaylist.addEventListener('click', () => {
    playlistOn = true
    infoPlayer(playlist2[0].music, playlist2[0].artist, playlist2[0].image,
        playlist2[0].audio)
})

musicRigth.addEventListener('click', () =>{
    x++
    if(playlistOn == true){
        if(x <= 4){
            infoPlayer(playlist2[x].music, playlist2[x].artist, playlist2[x].image,
                playlist2[x].audio)
        }else{
            x = 0
            infoPlayer(playlist2[x].music, playlist2[x].artist, playlist2[x].image,
                playlist2[x].audio)
        }
    }else{
        if(x <= 5){
            infoPlayer(playlist[x].music, playlist[x].artist, playlist[x].image,
                playlist[x].audio)
        }else{
            x = 0
            infoPlayer(playlist[x].music, playlist[x].artist, playlist[x].image,
                playlist[x].audio)
        }
    }
})

musicLeft.addEventListener('click', () =>{
    x--
    if(playlistOn == true){
        if(x < 0){
            x = 6
            infoPlayer(playlist2[x].music, playlist2[x].artist, playlist2[x].image,
                playlist2[x].audio)
                console.log(x)
        }else{
            infoPlayer(playlist2[x].music, playlist2[x].artist, playlist2[x].image,
                playlist2[x].audio)
        }
    }else{
        if(x < 0){
            x = 6
            infoPlayer(playlist[x].music, playlist[x].artist, playlist[x].image,
                playlist[x].audio)
                console.log(x)
        }else{
            infoPlayer(playlist[x].music, playlist[x].artist, playlist[x].image,
                playlist[x].audio)
        }
    }
})