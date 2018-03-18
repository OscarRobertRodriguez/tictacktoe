import xImage from '../../assets/images/x@2x.png';
import oImage from '../../assets/images/o@2x.png';
import {gameSetup} from './gameSetup';
import { declareWinner} from './declareWinner';
import backgroundMusic from '../../assets/audio/musicGame.wav';
import win from '../../assets/audio/win.wav';
import loss from '../../assets/audio/loss.wav';
import {rotateImg,flipImg} from './animations';

let musicBg = new Audio();
musicBg.src = backgroundMusic;
let winSound = new Audio();
let lossSound = new Audio();
winSound.src = win;
lossSound.src = loss;



let origBoard = Array.from(Array(9).keys());
let player1;
let aiPlayer;
let difficulty;



const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

let $square = $('.tick-tack-toe__square');
let $squareImgs = $square.find('img');


const $imgSquare = $square.find('img:not([src])');



$square.one('click', turnClick);


function turnClick(square) {
  // set player game pieces and imgs
  console.log(square.target.id + ' i am in tureClick');
  musicBg.play();
  musicBg.loop = true;
  let player1Img = gameSetup.getInfo.player1GamePiece === 'x' ? xImage : oImage;
  let aiImg = gameSetup.getInfo.computerGamePiece === 'o' ? oImage : xImage;
  player1 = gameSetup.getInfo.player1GamePiece;
  difficulty = gameSetup.getInfo.difficulty;
  aiPlayer = gameSetup.getInfo.computerGamePiece;

  // begin turns for human and computer
  if (typeof origBoard[square.target.id] == 'number') {
    turn(square.target.id, player1, player1Img);
    if (checkWin(origBoard, player1) === null && !checkTie()) {
      let $notFilled = $square.find('img:not([src])');
      let randomSquare = $notFilled.length > 0 ? $notFilled[Math.floor(Math.random() * $notFilled.length)] : console.log('board full');
      let $parentId = $(randomSquare).parent().attr('id');
      if (difficulty === 'hard') {
        turn(bestSpot(), aiPlayer, aiImg);
      } else {
        turn($parentId, aiPlayer, aiImg);
      }
    }
  }

}


function turn(squareId, player, img) {
  origBoard[squareId] = player;
  let $piece = $(`#${squareId}`).find('img');
  console.log($piece, " i am piece");

  $piece.attr('src', img);
  if (player === 'x') {
    rotateImg($piece);
  } else if (player === 'o') {
    flipImg($piece);
  }

  let gameWon = checkWin(origBoard, player);
  if (gameWon) {
    console.log('you won');
    gameOver(gameWon);
  }
  checkTie(gameWon);
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) =>
    (e === player) ? a.concat(i) : a, []);
  let gameWon = null;
  for (let [index, win] of winCombos.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {
        index: index,
        player: player
      };
      break;
    }
  }
  return gameWon;
}



function gameOver(gameWon) {
  let imgs = [];

  for (let index of winCombos[gameWon.index]) {
    let $square = $(`#${index}`).children();
    imgs.push($square);

  };

  declareWinner(gameWon.player == player1 ? "You Win!" : "You Lose!", imgs);
  musicBg.pause();
  $square.off('click', turnClick);
}

function emptySquares() {
  return origBoard.filter(s => typeof s == 'number');
}




function bestSpot() {
  // return  emptySquares().parent().attr('id');
  return minimax(origBoard, aiPlayer).index;
}


function checkTie(status) {
  let $display = $('.display-winner');
  let array = $.makeArray($imgSquare);
  console.log(status, ' im game won');
  
  if (emptySquares().length == 0 && status === null) {

    array.forEach((item, index) => {
      musicBg.pause();
      setTimeout(() => {
        item.classList.add('blink');
      }, index * 100);
    });
    declareWinner("It's a Tie!", array);
    $square.off('click', turnClick);

    return true;
  }
  return false;
}



function minimax(newBoard, player) {
  var availSpots = emptySquares();

  if (checkWin(newBoard, player1)) {
    return {
      score: -10
    };
  } else if (checkWin(newBoard, aiPlayer)) {
    return {
      score: 10
    };
  } else if (availSpots.length === 0) {
    return {
      score: 0
    };
  }
  var moves = [];
  for (var i = 0; i < availSpots.length; i++) {
    var move = {};
    move.index = newBoard[availSpots[i]];
    newBoard[availSpots[i]] = player;

    if (player == aiPlayer) {
      var result = minimax(newBoard, player1);
      move.score = result.score;
    } else {
      var result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    newBoard[availSpots[i]] = move.index;

    moves.push(move);
  }

  var bestMove;
  if (player === aiPlayer) {
    var bestScore = -10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    var bestScore = 10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}



function startPieceAnimation(player, element) {
  if (player === 'x') {
    rotateImg(element);
  } else {
    flipImg(element);
  }
}