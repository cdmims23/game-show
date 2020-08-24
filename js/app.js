const startBtn = document.querySelector('#btn_reset');


startBtn.addEventListener('click', (e) => {
    const game = new Game();
    game.startGame();
    game.getRandomPhrase().addPhraseToDisplay();
});