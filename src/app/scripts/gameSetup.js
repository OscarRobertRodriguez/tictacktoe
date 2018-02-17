

import buzzSound from '../../assets/audio/buzz.wav';
import startAudio from '../../assets/audio/start.wav';



//cache dom 
let $modalPiece = $('.modal-img');
let buzz = new Audio();
let startGame = new Audio();
buzz.src = buzzSound;

startGame.src = startAudio; 

let gameInfo = {
  player1GamePiece: null,
  computerGamePiece: null,
}


$('.modal-img').on('click', closeModal);
$('.modal-img').on('mouseover', function () { 
  buzz.play();
})
$('.modal-img').mouseleave(function() {
  buzz.pause();
})
$('.modal-img').click(function () {
  startGame.play();
})

function setPieces(e) {

  let $item = $(this);
  
  
  gameInfo.player1GamePiece = $item.attr('alt') === 'x' ? 'x' : 'o';
  gameInfo.computerGamePiece = $item.attr('alt') === 'x' ? 'o' : 'x';

}




function closeModal() {
  $(this).animate({
      opacity: .8,
      width: 0 + '%',
    },
    400,
    function () {
      $(this).parent().slideUp(300);
    }
  );
};





module.exports = {
  setPieces: setPieces,
  getInfo: gameInfo,
};