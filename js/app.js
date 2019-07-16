
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game; //creates new instance of Game class

//?help when i call this variable game the addphrase to disp;ay function does not work

        //add eventlisteneers for the start button and onscreen keyboard buttons


// test phrases are working 

//test if getrandonPhrase method works!


$('#btn__reset').click(function () { //add 'click' event listener to "startGame" button{ which }
    //$('#overlay').hide(event.target);
    game = new Game();              // creates new Game object and starts by callin startGame()
    game.startGame();              //calls startGame()method on object
    game.resetGameboard();          // calls resetGameboard function when button is clicked
});


$('.key').click(function () {   //click event listener for each onscrren keyboard button
    game.handleInteraction(event);      //calls handleInteraction method when letter clicked
    
}); 

//keyboard press event listener
document.addEventListener('keydown', function (event) {
    game.handleInteraction(event);      // listens for keypresses on user keyboard
});
    ////clicking blank space btw should not result in handleInteraction()
//Resetbutton
