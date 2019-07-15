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
                $('div#phrase.section').append(`<li class="hide space">  </li>`);  //use css class to program letter and space
            }

        }
        // $("#phrase ul").append(addPhraseToDisplay);


    }




    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
    // this.letter = function () { 
    //     return letters.phrases

    // });
    // this.phrase.filter(l => {
    //     return l.phrase != letter.phrase;           //check to see if letter selected by player matched letter in phrase
    // }
    // );



    //return this.phrase.match(letter);
    //each time cycle thru aray check if letter is equal to letter pass
    //checkLetter(letter)
    //const checkLetter = phrases.filter(letter => letter.val() === letter.textContent);
    // const checkPhrase = this.phrase.toLowerCase().split();
    // return checkPhrase.match(letter);


    // checkLetter(letter) {
    //     phrases = phrases.filter(l => {
    //         return l.phrase != letter.phrase;
    //      })
    // }

    showMatchedLetter(letter) {
        return this.phrase.includes(letter);
      //  $('#phrase > li').addClass('show').removeClass('hide');
        


    } // reveals letters on the board that matc palyer selection. 
    // select DOM elements with class name that match selected letter and replace with hide css with show
    
}

