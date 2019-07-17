/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();          //calls method 
        this.activePhrase = null;                   //prase object currently in play initial value null

    }

    createPhrase() {                             //method that creates and returns 5 new Phrase objects
        let phrases = [
            new Phrase("Seek light"),
            new Phrase("Speak truth"),
            new Phrase("Honor thy Father"),
            new Phrase("Flawless"),
            new Phrase("Pimpin aint Easy")];

        return phrases;
    }

    getRandomPhrase() {
        // phraseArray = this.phrases.length();
        let randPhrase = Math.floor(Math.random() * this.phrases.length); // randomly retrieves phrase story in phrases array and return it
        return this.phrases[randPhrase];


    }


    startGame() {
        $('#overlay').hide();               // hide start screen overlay, calls get random phrase() and sets active phrase property
        this.phrase = this.getRandomPhrase();
        //this.phrase = this.addPhraseToDisplay();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.resetGameboard();
    }
    resetGameboard() {
        const $heartLives = $("#scoreboard  li img");

        $('#overlay').removeClass('win', 'lose');

        $("#qwerty .key").removeClass("chosen");

        $("#qwerty .key").removeClass("wrong");
        
        $("#qwerty .key").prop("disabled", false);
     
        $heartLives.src = "images/liveHeart.png";
     

    }



    handleInteraction(event) {
        let letter = $(event.target).text();
        $(event.target).prop("disabled", true);  // disabled selected letter onscreen keyboard //.css({ "opacity": "0.6" })

        if (this.activePhrase.checkLetter(letter)) {
            $(event.target).addClass("chosen");
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            $(event.target).addClass("wrong");
            this.removeLife();
        }


    }

    removeLife() {
        //const $heartLives = $("#scoreboard > ol");  // Storing all the "lives" (The heart icons)
        const $heartLives = $("#scoreboard  li img");  // img tags that are children of the li element .find("img")
        let $missedHearts = $heartLives[this.missed];

        $missedHearts.src = "images/lostHeart.png";         // replace live heart with lostheart when missed incr.+1

        this.missed += 1;                                   // Missed guesses is incremented by 1

        if (this.missed === 5) {                    // If missed guesses is the maximum amount...
            this.gameOver();    // Ends game(gameOver())

        }
    }
    /* removes life from scoreboard by replacing liveHeart.png with lostHeart.png
        incriments missed property.
        if (player has 5 missed guess) { end game by calling gameOver ()}*/
    
    checkForWin() {
        return $("#phrase ul .hide").length === 0; // returns true or false depending on the value of .hide

    }
    gameOver() {
        const $overlay = $("#overlay");                 // hold the overlay element
        const $gMessage = $("#game-over-message");         //hold overlay h1 element
        $overlay.show();                                   //show ovelayscreen when game over is called
        $overlay.removeClass('start');                  //removes the default class from the overlay
        if (this.missed === 5) {                        //condition test in the value of missed is at 5
            $overlay.addClass('lose');                  // if the condition is met lose class added to overlay
            $gMessage.text("Aww so sorry. Better Luck Next Time");  //message display on screen
        }
        else {
            $overlay.addClass('win');               // if missed is a=not at 5 then user wins
            $gMessage.text("Wow. You really are a winner"); //message display on screen
        }

    }
    /* displays original start screen overlay
                   depending on outcome of game updates <h1> with win or loss messaage
    replace overlays css .start class with either .win or .lose class */


}
