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
                listItem.textContent = `${this.phrase[i]};`
            }
            parentElement.appendChild(listItem);
        }
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
}