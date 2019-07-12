/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const NewGame = new Game(); //creates new instance of Game class
let game;
//?help when i call this variable game the addphrase to disp;ay function does not work

const onscreenKeys = document.querySelectorAll('.key');         //add eventlisteneers for the start button and onscreen keyboard buttons


// test phrases are working 

//test if getrandonPhrase method works!


$('#btn__reset').click(function () { //add 'click' event listener to "startGame" button{ which }
    $('#overlay').hide(event.target);
    game = new Game();              // creates new Game object and starts by callin startGame()
    game.startGame();              //calls startGame()method on object
});


$('button.key').click(function (event) {   //click event listener for each onscrren keyboard button
    game.handleInteraction(event);      //calls handleInteraction method when letter clicked
});

//keyboard press event listener
document.addEventListener('keydown', function (event) {
    game.handleInteraction(event);      //calls handleInteraction method
});
    ////clicking blank space btw should not result in handleInteraction()


// gameButton.on('click', startGame)(() => {
//     game = new Game();
//     game.resetGameBoard();
//     game.startGame();
//     //setup();
//     //updateScreen();
// });
    //rough plan

    //on screen keyboard event listener
// onscreenKeys.addEventListener('click', (e) => {

//     if (e.target.className === 'key') {
//         markButton(e.target.textContent);
//     }
// });
//roughplan