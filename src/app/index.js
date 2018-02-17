// import main scss file and reset 
import '../styles/main.scss';
// import jquery library 
import 'jquery';
// import html for html-loader
import '../index.html';


// import x from '../assets/images/x@2x.png';
// import o from '../assets/images/o@2x.png';



// store game pieces
import {gameSetup} from  './scripts/gameSetup'; 
// script for piece placement on click
import  './scripts/placePieces'; 
import './scripts/restart'; 

$('.modal-img').on('click', gameSetup.setPieces); 









