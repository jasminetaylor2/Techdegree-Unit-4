/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toString().toLowerCase();
    }

    addPhraseToDisplay() {

        for (let i = 0; i < this.phrase.length; i += 1) {
            if (this.phrase[i] !== ' ') {
                $('div#phrase.section').append(`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`); //using template literals to append phrase to ul

            } else {
                $('div#phrase.section').append(`<li class="hide space">  </li>`);
            }

        }

    }


    checkLetter(letter) {              //letter reps the key button clicked
        for (let i = 0; i < this.phrase.length; i += 1)  //not certain about loop I want to check entire phrase for letter
            if (this.phrase.charAt(0) === '') { }          // if letter in phrase match selected letter
       
            letter = letter.filter(letter => { 
            return checkLetter.phrase(letter);
            
        });
        //return this.phrase.match(letter);
        //each time cycle thru aray check if letter is equal to letter pass
        //const checkLetter = phrases.filter(letter => letter.val() === 'p');
        
        //checkLetter(letter)
        // const checkPhrase = this.phrase.toLowerCase();
        // return checkPhrase.match(letter);
        
    } //check to see if letter selected by player matched letter in phrase
    // checkLetter(letter) {
    //     phrases = phrases.filter(l => {
    //         return l.phrase != letter.phrase;
    //      })
    // }
 
    showMatchedLetter(letter) {
        $(`#phrase .letter.${letter}`).toggleClass('show hide');
    } // reveals letters on the board that matc palyer selection. 
    // select DOM elements with class name that match selected letter and replace with hide css with show

}

