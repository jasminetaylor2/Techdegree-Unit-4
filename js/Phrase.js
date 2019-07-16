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
                $('#phrase ul').append(`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`); //using template literals to append phrase to ul
            } else {
                $('#phrase ul ').append(`<li class="hide space">  </li>`);  //use css class to program letter and space
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


    showMatchedLetter(letter) {
        let $phraseL;
        for (let index = 0; index < this.phrase.length; index++) {
            $phraseL = $("#phrase li")[index];
            if ($phraseL.textContent === letter) {
                $phraseL.classList.add('show');
                $phraseL.classList.remove('hide');
            }


        }
        //if (this.checkLetter(letter) === false)


        console.log('help me obi-juan');
    }

    // reveals letters on the board that matc palyer selection. 
    // select DOM elements with class name that match selected letter and replace with hide css with show
    // for (let index = 0; index < letter.length; index++) {
    //     sletter[index].addClass("show");

    // }
}

