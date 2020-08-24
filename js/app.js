const startBtn = document.querySelector('#btn__reset');
const keys = document.querySelectorAll('.key');
const lives = document.querySelectorAll('.tries img');
const startOverlay = document.querySelector('#overlay');
const game = new Game();


for(let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e) => {
        //if statment to disable button without removing the listener.
        if(!keys[i].classList.contains('chosen') && !keys[i].classList.contains('wrong')) {
            game.handleInteraction(keys[i].textContent, e.target, lives);
        }
    });
}

startBtn.addEventListener('click', (e) => {
    //Resting the board once the start button is clicked.
    for(let j = 0; j < keys.length; j++) {
        if(keys[j].classList.contains('chosen')){
            keys[j].classList.remove('chosen');
        } else if(keys[j].classList.contains('wrong')){
            keys[j].classList.remove('wrong');
        }
        keys[j].disabled = false;
    }

    for(let k = 0; k < lives.length; k++) {
        lives[k].src = 'images/liveHeart.png';
        lives[k].classList.add('live');
    }
    startOverlay.className = 'start';
    game.startGame();
});

//Global listener for a keypress.
document.addEventListener('keydown', (e) => {
if(startOverlay.style.display === 'none') {
    for(let l = 0; l < keys.length; l++) {
        if(keys[l].textContent === e.key) {
            if(!keys[l].classList.contains('chosen') && !keys[l].classList.contains('wrong')) {
                game.handleInteraction(e.key, keys[l], lives);
            }
        }
    }
}
});
