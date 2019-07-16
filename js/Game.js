/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();  //an [] array of 5 phrase objects to use with game 
        this.activePhrase = null; //prase object currently in play initial value null

    }

    createPhrase() {
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

        // phrases.forEach(phrase => {
        //     let rPhrase = Math.floor(Math.random() * this.phrases.length);
        //     let _phraseRandom = phrases[rPhrase];
        //     return _phraseRandom;
        // });

    }


    startGame() {
        $('#overlay').hide();               // hide start screen overlay, calls get random phrase() and sets active phrase property
        this.phrase = this.getRandomPhrase();
        //this.phrase = this.addPhraseToDisplay();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }
    resetGameboard() {
        // $('#phrase ul').empty(); // removes all child nodes of Ul ==li emlements
        $('#phrase ul').innerHtml = " ";

        $('#overlay').removeClass('win', 'lose');
        $('#overlay').addClass('start');
        // for (let i = 0; i < $('button.key').length; i += 1)

        $("button.key").removeClass('chosen', 'wrong');
        $("buton.key").prop("disabled", false);
        //for (let i = 0; i < $('#scoreboard li img').length; i += 1) {
            // if ($('#scoreboard li img')[i].classList('tries')) {
                $("div#scoreboard li img").attr("src", "images/liveHeart.png").show(["Heart Icon"]);
           // }
            //$("div#scoreboard li img").attr("").show();
        
    }



    handleInteraction(event) {
        // const clickedKey = $(".key").click(() => { });
        $(event.target).prop("disabled", true).css({ "opacity": "0.6" });
        if (this.phrase.checkLetter() === event.target) {          //chaining checkLetter method as a callbackfucntion To check each letter in the element match phrase
            //  $("button.key").attr("disabled", true);
            this.phrase.showMatchedLetter();      // if letter matched showMatchedLetter function this.phrase.checkLetter() === ''
            this.checkForWin();

            // let $buttonKey = $('.key'); //gives chosen class to keyboard letter .addClass('chosen')
            // if ($(event.target).className === "disabled") {
            //     $(".key")  // add opacity prop to create diabled look button
            // }
            return true;
        }
    }
        // } else if (this.missed >= 4) { }
        //     this.removeLife();
        //     this.gameOver();
            
        // }  // need to disable onscreen keyboard button if retun is true;
        // else if $(this).prop('disabled', true)) {
        //     $(".key").blur();
        //  }
        // else if (this.missed >= 4) {
        //     return removeLife();
        // }
        // else if (this.missed = 5) { return this.gameOver(); }
            
    


    
    /* chekcs to see if the button clicked by player matches letter in phrase
                        disable the selected letter on screen keyboard
                        if (phrase does not include guessed letter) {add .wrong class the selected letters keyboard button and call removeLife()} 
                        if ( phrase includes guess letter) {add .chosen class to selectted letters keyboard button  
                            and call showMatchedLetter() on phrase , and then call checkForWin()}
                        if (player wins game) {call gameOver()}*/
    // if (this.ready) {
    //     if (e.type === "key") { this.activePhrase.showMatchedLetter(); }
    // }

    // const phraseKey = this.phrases.filter(letter => letter  )
    //         if (this.class === "key") {
    //             //this.phrase.addPhraseToDisplay.chosen;
    //         } 



    removeLife() { /* removes life from scoreboard by replacing liveHeart.png with lostHeart.png
                    incriments missed property. 
    if (player has 5 missed guess) { end game by calling gameOver ()}*/
    }

    checkForWin() {
        // target.mark(token);

        // if (!this.checkForWin(target)) {
        //     console.log('no win');
        //     this.switchPlayers();

        //     if (this.activePlayer.checkTokens()) {
        //         this.activePlayer.activeToken.drawHTMLToken();
        //         this.ready = true;
        //     } else {
        //         this.gameOver('No more tokens');
        //     }
        // } else {
        //     console.log('win');
        //     this.gameOver(`${target.owner.name} wins!`)
    }	// } // check to see if player revealed all letter in active phrase

    gameOver() { /* displays original start screen overlay
                    depending on outcome of game updates <h1> with win or loss messaage
    replace overlays css .start class with either .win or .lose class */ }

}
