import x from '../../assets/images/x@2x.png';
import o from '../../assets/images/o@2x.png';

let restartBtn = $('.restart-btn'); 
let pieces = $('.tick-tack-toe__square > .tick-tack-toe__square-img'); 
let modal = $('.modal-intro');
let modalImgs = modal.find('.modal-img'); 



restartBtn.on('click', reset);

function reset () {
 pieces.animate({
   height: 0, 
   width: 0 ,
 }, 300, function () {
   pieces.attr('src', '').attr('alt', '');
   location.reload();
 }); 

}