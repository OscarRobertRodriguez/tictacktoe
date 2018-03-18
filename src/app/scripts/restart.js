import x from '../../assets/images/x@2x.png';
import o from '../../assets/images/o@2x.png';

let restartBtn = $('.restart-btn'); 
let pieces = $('.tick-tack-toe__square > .tick-tack-toe__square-img');  
export let board; 


restartBtn.on('click', reset);

function reset () {
  board = Array.from(Array(9).keys())
 pieces.animate({
   height: 0, 
   width: 0 ,
 }, 300, function () {
   location.reload();
 }); 

}


