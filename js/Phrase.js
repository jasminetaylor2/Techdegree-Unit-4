/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toString().toLowerCase();
    }

    addPhraseToDisplay() {
        $('#phrase ul ').empty();               // removes all child nodes of Ul ==li emlements
        for (let i = 0; i < this.phrase.length; i += 1) {
            if (this.phrase[i] !== ' ') {
                $('#phrase ul').append(`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`); //using template literals to append phrase to ul
            } else {
                $('#phrase ul ').append(`<li class="space">  </li>`);  //use css class to program letter and space
            }

        }

    }

    checkLetter(letter) {
        return (this.phrase.includes(letter));   //check to see if letter selected by player matched letter in phrase
    }


    showMatchedLetter(letter) {
        let $phraseL;
        for (let index = 0; index < this.phrase.length; index++) {  //loop through phrase to get the index of letter selected
            $phraseL = $("#phrase li")[index];                      // stores the index value of the phrase array
            if ($phraseL.textContent === letter) {                  //checks the letter matches the phrase index textContent
                $phraseL.classList.add("show");                     // add class of show to matched letter value
                $phraseL.classList.remove("hide");                  // remove class of hide to matched letter value
            }


        }

    }


}

