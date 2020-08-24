class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    startGame() {

    }

    /**
      * Creates phrases for use in game
      * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [ 
            new Phrase('better late than never'),
            new Phrase('break a leg'),
            new Phrase('every cloud has a silver lining'),
            new Phrase('the best thing since sliced bread'),
            new Phrase('the early bird gets the worm')
        ]
        return phrases;
    }

    /**
      * Selects random phrase from phrases property
      * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random];
    }

    handleInteraction() {

    }

    checkForWin() {

    }

    removeLife() {

    }

    gameOver() {

    }

}

const myGame= new Game();

console.log(myGame.getRandomPhrase());