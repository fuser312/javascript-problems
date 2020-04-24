// 2048 Tiles Slide
// 2048 is a game where you need to slide numbered tiles (natural powers of 2) up, down, left or right on a square grid to combine them in a tile with the number 2048.

// The sliding procedure is described by the following rules:

// - Tiles slide as far as possible in the chosen direction until they are stopped by either another tile or the edge of the grid.
// - If two tiles of the same number collide while moving, they will merge into a tile with the total value of the two tiles that collided.
// - If more than one variant of merging is possible, move direction shows one that will take effect.
// 			- Tile cannot merge with another tile more than one time.

// Sliding is done almost the same for each direction and for each row/column of the grid, so your task is to implement only the left slide for a single row.

// leftSlide([2, 2, 2, 0]) ➞ [4, 2, 0, 0]
// leftSlide([2, 2, 4, 4, 8, 8]) ➞ [4, 8, 16, 0, 0, 0]

function leftSlide(listOfNumber){
    var newListOfNumber = [];
    for(var i = 0; i< listOfNumber.length; i++){
        if(listOfNumber[i]!= 0){
            newListOfNumber.push(listOfNumber[i]);
        }
    }
    for(var j = 0; j< newListOfNumber.length-1; j++){
        if(newListOfNumber[j] == newListOfNumber[j+1]){
            newListOfNumber[j] = newListOfNumber[j] + newListOfNumber[j+1];
            newListOfNumber.splice(j+1, 1);
        }
    }

    var difference = listOfNumber.length - newListOfNumber.length;
    var listOfZeros = Array(difference).fill(0);
    return newListOfNumber.concat(listOfZeros);
}

console.log(leftSlide([2, 2, 2, 0]));