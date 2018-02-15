import {
  checkAllSame
} from './utilities';

let $square = $('.tick-tack-toe__square'); 
let $row1Imgs = [$square.find('img')[0], $square.find('img')[1], $square.find('img')[2]]; 
let $row2Imgs = [$square.find('img')[3], $square.find('img')[4], $square.find('img')[5]]; 
let $row3Imgs = [$square.find('img')[6], $square.find('img')[7], $square.find('img')[8]]; 
let $col1Imgs = [$square.find('img')[0], $square.find('img')[3], $square.find('img')[6]]; 
let $col2Imgs = [$square.find('img')[1], $square.find('img')[4], $square.find('img')[7]]; 
let $col3Imgs = [$square.find('img')[2], $square.find('img')[5], $square.find('img')[8]]; 
let $dia1Imgs = [$square.find('img')[0], $square.find('img')[4], $square.find('img')[8]];
let $dia2Imgs = [$square.find('img')[2], $square.find('img')[4], $square.find('img')[6]];  






function checkForWinner(array, gameData) {
  let holder = [];
  let winner = false;
  var stop = false; 
  let computerPiece = gameData.computerGamePiece;
  let player1 = gameData.player1GamePiece;
  console.log(player1);

  array.each(function (index, img) {
    holder.push($(this).attr('alt'));
  })

  let cloneHolder = [...holder];
  let row1 = cloneHolder.slice(0, 3);
  let row2 = cloneHolder.slice(3, 6);
  let row3 = cloneHolder.slice(6, 9);
  let col1 = [cloneHolder[0], cloneHolder[3], cloneHolder[6]];
  let col2 = [cloneHolder[1], cloneHolder[4], cloneHolder[7]];
  let col3 = [cloneHolder[2], cloneHolder[5], cloneHolder[8]];
  let dia1 = [cloneHolder[0], cloneHolder[4], cloneHolder[8]];
  let dia2 = [cloneHolder[2], cloneHolder[4], cloneHolder[6]];


  let testrow1 = checkAllSame(row1);
  console.log(testrow1);
  
  let testrow2 = checkAllSame(row2);
  console.log(testrow2);
  
  let testrow3 = checkAllSame(row3);
  console.log(testrow3);
  
  let testcol1 = checkAllSame(col1);
  console.log(testcol1);
  
  let testcol2 = checkAllSame(col2);
  console.log(testcol2);
  
  let testcol3 = checkAllSame(col3); 
  console.log(testcol3); 
  let testdia1 = checkAllSame(dia1); 
  console.log(testdia1);
  
  let testdia2 = checkAllSame(dia2);
  console.log(testdia2);
  


  if (testrow1 && stop === false) {
    stop = true; 
    if (row1[0] === player1) {
      console.log('player 1 wins');
      winner = true; 
    }
    displayWinner($row1Imgs, gameData, winner); 
  }

  if (testrow2 && stop === false) {
    stop = true; 
    if (row2[0] === player1) {
      console.log('player 1 wins');
      winner = true; 
    }
    displayWinner($row2Imgs, gameData, winner); 
  }

  if (testrow3 && stop === false) {
    stop = true; 
    if (row3[0] === player1) {
      console.log('player 1 wins');
      winner = true; 
    }
    displayWinner($row3Imgs, gameData, winner); 
  }

// new
  if (testcol1 && stop === false) {
    stop = true; 
    if (col1[0] === player1) {
      console.log('player 1 wins');
      winner = true; 
    }
    displayWinner($col1Imgs, gameData, winner); 
  }

  if (testcol2 && stop === false) {
    stop = true;  
    if (col2[0] === player1) {
      console.log('player 1 wins');
      winner = true; 
    }
    displayWinner($col2Imgs, gameData, winner); 
  }

  if (testcol3 && stop === false) {
    stop = true; 
    if (col3[0] === player1) {
      console.log('player 1 wins');
      winner = true; 
    }
    displayWinner($col3Imgs, gameData, winner); 
  }

  if (testdia1 && stop === false ) {
    stop = true; 
    if (dia1[0] === player1) {
      console.log('player 1 wins');
      winner = true; 
    }
    displayWinner($dia1Imgs, gameData, winner); 
  }

  if (testdia2 && stop === false) {
    stop = true; 
    if (dia2[0] === player1) {
      console.log('player 1 wins');
      winner = true; 
    }
    displayWinner($dia2Imgs, gameData, winner); 
  }

}



function displayWinner (array, data, status) {
 console.log(array);
 if (status === true) {
   console.log('player 1 has won');
   array.forEach((item, index) => setTimeout(function(){
     item.classList.add('blink') 
   }, index * 400)); 
}

else if (status === false ) {
   array.forEach((item, index) => setTimeout(function () {
     item.classList.add('blink')
   }, index * 400)); 
}



}




export {
  checkForWinner
};