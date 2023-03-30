let buttons = document.querySelectorAll('.drum')
let keyArr = ['w', 'a', 's', 'd', 'j', 'k', 'l']
let soundArr = ['tom-1', 'tom-2', 'tom-3', 'tom-4', 'snare', 'crash', 'kick-bass']
let p = document.querySelector('p')

p.addEventListener('click', (e)=>{
    if (p.classList[0] == 'unactive') {
        p.textContent = 'Press me to deactivate drum kit!'
        document.addEventListener('keydown', (e)=>{
            if (keyArr.includes(e.key.toLowerCase())) {
                let indexOfKey = keyArr.indexOf(e.key.toLowerCase())
                playMusic(indexOfKey)
                animate(keyArr[indexOfKey])
            }
        })
        
        for (let i = 0; i < buttons.length; i++) {
        
            buttons[i].addEventListener('click', handleBtn)
            buttons[i].addEventListener('mouseover', handleBtn)
        }
    } else {
        p.textContent = 'Press me to activate drum kit!'
    }
    p.classList.toggle('unactive')
    p.classList.toggle('active')
})


function handleBtn(e) {
    let indexOfKey = keyArr.indexOf(e.srcElement.classList[0])
    playMusic(indexOfKey)
    animate(keyArr[indexOfKey])
}

function playMusic(index) {
    let audio = new Audio('sounds/'+soundArr[index]+'.mp3')
    audio.play()
}

function animate(char) {
    let btn = document.querySelector('.'+char)
    btn.classList.add('pressed')

    setTimeout(()=>{
        btn.classList.remove('pressed')
    }, 100)
}