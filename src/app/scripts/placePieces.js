import xImage from '../../assets/images/x@2x.png';
import oImage from '../../assets/images/o@2x.png';

import { rotateImg,flipImg } from './animations';
import {gameSetup} from './gameSetup';
import {checkForWinner} from './checkForWinner';
import pop from '../../assets/audio/pop.wav'; 

let popSound = new Audio(); 
popSound.src = pop; 

const $square = $('.tick-tack-toe__square');
const $imgSquare = $square.find('img:not([src])');
let gameObject = gameSetup.getInfo;



$square.one('click', placePlayer1);

$square.find('img').on('dragstart', (e) => e.preventDefault());


function placePlayer1() {
  let $zone = $(this);
  let player1 = gameObject.player1GamePiece === 'x' ? xImage : oImage;
  let $img = $zone.find('img');
  popSound.play();


  $img.attr('src', player1);
  $img.attr('alt', gameObject.player1GamePiece);


  startPieceAnimation($img.attr('alt'), $img);


  placeComputerPiece();

  checkForWinner($square.find('img'), gameObject);
}


function placeComputerPiece() {
  let notFilled = $square.find('img:not([src])');
  let randomSquare = notFilled.length > 0 ? notFilled[Math.floor(Math.random() * notFilled.length)] : console.log('board full');
  let computerPiece = gameObject.computerGamePiece === 'o' ? oImage : xImage;
  let $img = $(randomSquare);
  $img.attr('src', computerPiece).attr('alt', gameObject.computerGamePiece);

  setTimeout(() => {
    startPieceAnimation($img.attr('alt'), $img);
  }, 200);
  $img.parent().off('click', placePlayer1);



}

function startPieceAnimation(altValue, element) {
  if (altValue === 'x') {
    rotateImg(element);
  } else {
    flipImg(element);
  }
}


export {
  placePlayer1,
  $square
}