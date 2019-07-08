/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const newGame = new Game();
newGame.phrase.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});

    //add 'click' ebent listener to "startGame" button{ which creates ner Game object and starts by callin startGame() }
    //add eventlisteneers for the start button and onscreen keyboard buttons
    //'click' event lsiteners to onscreen keyboard butons{ calls handleInteraction() use event delegation}
    ////clicking blank space btw should not result in handleInteraction()
