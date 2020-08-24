class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }

    /**
      * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseLength = this.phrase.length;
        const parentElement = document.querySelector('#phrase ul');

        for (let i = 0; i < phraseLength; i++) {
            let listItem = document.createElement('li');
            if(this.phrase[i] === ' ') {
                listItem.classList.add('space');
            } else {
                listItem.classList.add('hide');
                listItem.classList.add('letter');
                listItem.classList.add(this.phrase[i]);
                listItem.textContent = `${this.phrase[i]}`;
            }
            parentElement.appendChild(listItem);
        }
    }

    /**
      * Checks if passed letter is in phrase
      * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
      * Displays passed letter on screen after a match is found
      * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll(`.${letter}`);
        console.log('showMatchedLetter function has been called');
        for(let i = 0; i < letters.length; i++) {
            letters[i].classList.add('show');
            letters[i].classList.remove('hide');
        }
    }
}