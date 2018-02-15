

function checkAllSame (array) {
 
  if(array.some(val => val === undefined)) {
    return false; 
  }

 return array.every((val, i, arr) => val === arr[0] ); 
}

export {checkAllSame};