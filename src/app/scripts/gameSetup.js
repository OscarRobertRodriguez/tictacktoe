// import xPiece from '../../assets/images/x@2x.png';
// import oPiece from '../../assets/images/o@2x.png';







//cache dom 
let $modalPiece = $('.modal-img');



let gameInfo = {
  player1GamePiece: null,
  computerGamePiece: null,
}


$('.modal-img').on('click', closeModal);

function setPieces(e) {

  let $item = $(this);


  gameInfo.player1GamePiece = $item.attr('alt') === 'x' ? 'x' : 'o';
  gameInfo.computerGamePiece = $item.attr('alt') === 'x' ?  'o' : 'x';

  console.log(gameInfo);
  
  console.log(`player has picked ${$item.attr('alt')}`);

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
  getInfo : gameInfo 
};