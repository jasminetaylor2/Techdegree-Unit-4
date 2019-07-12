/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(missed, phrases, activePhrase = null) {
        this.missed = 0;
        this.phrases = [
            new Phrase("Seek light"),
            new Phrase("Speak truth"),
            new Phrase("Honor thy Father"),
            new Phrase("Flawless"), //these work but i dont feel are the code i want to use
            new Phrase("Pimpin aint Easy")];  //an [] array of 5 phrase objects to use with game 
        this.activePhrase = activePhrase; //prase object currently in play initial value null

    }

    getRandomPhrase() {
        const randPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randPhrase];

        // phrases.forEach(phrase => {
        //     let rPhrase = Math.floor(Math.random() * this.phrases.length);
        //     let _phraseRandom = phrases[rPhrase];
        //     return _phraseRandom;
        // });


        // $.each(phrases, function (index, value) { 
        //     console.log(value);
        //     //return phrases.val();

        // });
        // const gamePhrases = phrases.length;   

        //for (let i= 0; i < phrases.length; i += 1) {
        // console.log(phrases[i]);


        //     // randomly retrieves phrase story in phrases array and return it
        // }

    }


    startGame() {
        $('#overlay').hide();               // hide start screen overlay, calls get random phrase() and sets active phrase property
        this.phrase = this.getRandomPhrase();
        this.phrase.addPhraseToDisplay();

    }



    handleInteraction() { /* chekcs to see if the button clicked by player matches letter in phrase
                            disable the selected letter on screen keyboard
                            if (phrase does not include guessed letter) {add .wrong class the selected letters keyboard button and call removeLife()} 
                            if ( phrase includes guess letter) {add .chosen class to selectted letters keyboard button  
                                and call showMatchedLetter() on phrase , and then call checkForWin()}
                            if (player wins game) {call gameOver()}*/

    }

    removeLife() { /* removes life from scoreboard by replacing liveHeart.png with lostHeart.png
                    incriments missed property. 
    if (player has 5 missed guess) { end game by calling gameOver ()}*/
    }

    checkForWin() { } // check to see if player revealed all letter in active phrase

    gameOver() { /* displays original start screen overlay
                    depending on outcome of game updates <h1> with win or loss messaage
    replace overlays css .start class with either .win or .lose class */ }

}
