

import buzzSound from '../../assets/audio/buzz.wav';
import startAudio from '../../assets/audio/start.wav';



//cache dom 
let $modalPiece = $('.modal-img');
let $modalDiffButtons = $('.difficulty-btn'); 
let buzz = new Audio();
let startGame = new Audio();
buzz.src = buzzSound;
startGame.src = startAudio; 

let gameInfo = {
  player1GamePiece: null,
  computerGamePiece: null,
  difficulty: null 
}


$modalPiece.on('click', closeModal);
$modalPiece.on('mouseover', function () {  buzz.play(); });
$modalPiece.mouseleave(function() {buzz.pause();});
$modalDiffButtons.click(function () { startGame.play();});


$modalDiffButtons.on('click', closeModal); 

function setPieces(e) {
  let $item = $(this);
  gameInfo.player1GamePiece = $item.attr('alt') === 'x' ? 'x' : 'o';
  gameInfo.computerGamePiece = $item.attr('alt') === 'x' ? 'o' : 'x';
}

function setDifficulty () {
  let $button = $(this);
  gameInfo.difficulty = $button.text(); 
}


function closeModal() {
  $(this).animate({
      opacity: .8,
      width: 0 + '%',
      fontSize: 0 + 'px'
    },
    400,
    function () {
      $(this).parent().slideUp(300);
    }
  );
};





export let gameSetup = {
  setPieces: setPieces,
  setDifficulty: setDifficulty,
  getInfo: gameInfo,
};