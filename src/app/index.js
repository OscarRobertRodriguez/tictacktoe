// import main scss file and reset 
import '../styles/main.scss';
// import jquery library 
import 'jquery';
// import html for html-loader
import '../index.html';





// store game pieces
import {gameSetup} from  './scripts/gameSetup'; 
import './scripts/restart'; 
import './scripts/game-logic';

// function to set game pieces and difficulty vaules in an object
$('.modal-img').on('click', gameSetup.setPieces); 
$('.difficulty-btn').on('click', gameSetup.setDifficulty); 








