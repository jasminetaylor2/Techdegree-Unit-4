/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const newGame = new Game();
//const gameButton = document.getElementById('btn__reset');        //add 'click' ebent listener to "startGame" button{ which creates ner Game object and starts by callin startGame() }
//const onscreenKeys = document.querySelectorAll('.key');         //add eventlisteneers for the start button and onscreen keyboard buttons

//onscreenKeys.addEventListner('click', 'keypress', handleInteraction); //'click' event lsiteners to onscreen keyboard butons{ calls handleInteraction() use event delegation}
//gameButton.addEventListener('click', startGame);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });   //these are notes to test phrases are working 


// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
    //test if getrandonPhrase method works!
// gameButton.on('click', startGame)(() => {
//     game = new Game();
//     game.resetGameBoard();
//     game.startGame();
//     //setup();
//     //updateScreen();
// });
    //rough plan
$('#btn__reset').click(function () {
    resetDisplay(event.target);
    game = new Game();
    game.startGame();
});

function resetDisplay() {
    $('#overlay').animate(
        { opacity: '0' }, 1000,
        function () {
            $('#overlay').hide();
            game.active = true;
        });
}
//keyboard event listener
// onscreenKeys.addEventListener('click', (e) => {

//     if (e.target.className === 'key') {
//         markButton(e.target.textContent);
//     }

// });
// });

   
    ////clicking blank space btw should not result in handleInteraction()
