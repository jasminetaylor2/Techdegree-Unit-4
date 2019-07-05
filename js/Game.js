/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        missed: 0;
        phrases: [] ; //an [] array of 5 phrase objects to use with game 
        activePharase: activePharase; //prase object currently in play initial value null
    }
    /*"Superior",
            "Monumental",
            "Excellent",
            "Flawless"*/
    
    startGame() { }// hide start screen overlay, calls get random phrase() and sets active phrase property

    getRandomPhrase() {// randomly retrieves phrase story in phrases array and return it
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
