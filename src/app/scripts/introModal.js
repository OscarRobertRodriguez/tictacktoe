import xPiece from '../../assets/images/x@2x.png';
import oPiece from '../../assets/images/o@2x.png';


(function(){
  let picked,
      userPiece; 

  $('.modal-img').on('click', closeModal); 

  function closeModal () {
    $(this).animate({
      opacity: .8,
      width: 0 + '%', 
    },
    500,
    function () {
      $(this).parent().slideUp(600);  
    }
  ); 
   picked = $(this).attr('alt');
  
   return piecePicked(picked); 
 };

  function piecePicked(piece) {
    if(picked === 'x') {
      userPiece = xPiece; 
    }else {
      userPiece = oPiece; 
    }
    
    
  }

  

}())