
import backgroundMusic from '../../assets/audio/musicGame.wav';
import win from '../../assets/audio/win.wav';
import loss from '../../assets/audio/loss.wav';

let musicBg = new Audio(); 
musicBg.src = backgroundMusic; 
let winSound = new Audio(); 
let lossSound = new Audio(); 
winSound.src = win; 
lossSound.src = loss;




function declareWinner(who, items, sound) {
  let $display = $('.display-winner');
  $display.hide().text(who).fadeIn(1000); 
  who === 'You Win!' ? winSound.play() : lossSound.play(); 
if (who !== "It's a Tie!") {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.addClass('blink')
    }, index * 200);
  });
}
}



export {
  declareWinner
};