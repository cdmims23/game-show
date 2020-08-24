class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
      * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        const currentPhrase = this.getRandomPhrase();
        this.activePhrase = currentPhrase;
        currentPhrase.addPhraseToDisplay(currentPhrase);
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

    handleInteraction(letter, target, tries) {
        if(this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter)
            target.classList.add('chosen');
            target.disabled = true;
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            if(this.missed >= 4) {
                this.gameOver(false);
            } else {
                this.removeLife(tries);
                target.classList.add('wrong');
                target.disabled = true;
            }
        }
    }

    /**
      * Checks for winning move
      * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        if(hiddenLetters.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
      * Increases the value of the missed property
      * Removes a life from the scoreboard
      * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(tries) {
        for(let i = 0; i < tries.length; i++) {
            if(tries[i].classList.contains('live')) {
                tries[i].src =  'images/lostHeart.png';
                tries[i].classList.remove('live');
                break;
            }
        }
        this.missed += 1;
    }

    /**
      * Displays game over message
      * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(win) {
        const overlay = document.querySelector('#overlay');
        const heading = document.querySelector('#game-over-message');
        const phraseList = document.querySelector('#phrase ul');
        if(win) {
            overlay.classList.add('win');
            heading.textContent = 'Great Job!';
            overlay.style.display = 'flex';
        } else {
            overlay.classList.add('lose');
            heading.textContent = 'Sorry, better luck next time.';
            overlay.style.display = 'flex';
        }
        phraseList.innerHTML = '';
        this.activePhrase = null;
        this.missed = 0;
    }

}