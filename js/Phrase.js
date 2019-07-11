/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
   
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i += 1) {
            if (this.phrase[i] !== ' ') {
                $('div#phrase.section').append(`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`);
            } else {
                $('div#phrase.section').append(`<li class="hide space">&nbsp;</li>`);
            }
        
        }
      
        checkLetter()  } //check to see if letter selected by player matched letter in phrase

        showMatchedLetter() {
       
        } // reveals letters on the board that matc palyer selection. 
        // select DOM elements with class name that match selected letter and replace with hide css with show

    }

