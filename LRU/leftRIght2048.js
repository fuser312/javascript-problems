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

// Part 2
// Implement only the right slide for a single row.
// rightSlide([2, 2, 2, 0]) ➞ [0, 0, 2, 4]
// rightSlide([2, 2, 4, 4, 8, 8]) ➞ [0, 0, 0, 4, 8, 16]


// Part 3
// Imlement LeftSlide and RightSlide for given matrix:
// var board = [
// 	[2, 2, 2, 0],
// 	[2, 4, 0, 4],
// 	[0, 2, 2, 0],
// 	[8, 4, 4, 8],
// ]


// Part 4
// Imlement SlideUp and SlideDown for a square matrix:
// var board = [
// 	[2, 2, 2, 0],
// 	[2, 4, 0, 4],
// 	[0, 2, 2, 0],
// 	[8, 4, 4, 8],
// ]

// Part 5
// Add '2' to the board at any random empty space (0 is treated as empty space)


function leftSLide(listOfNumbers){
    for(var i = 0; i < listOfNumbers.length-1; i ++){
        if(listOfNumbers[i] != 0 && listOfNumbers[i] == listOfNumbers[i+1]){
            listOfNumbers[i] = listOfNumbers[i] + listOfNumbers[i+1];
            listOfNumbers.splice(i+1, 1)
            listOfNumbers.push(0);
        }
        else if(listOfNumbers[i] == 0){
            listOfNumbers.splice(i,1);
            listOfNumbers.push(0);
        }
    }
    return listOfNumbers
}

function rightSlide(listOfNumbers){
    var temp = leftSLide(listOfNumbers);
    return temp.reverse();
}


function leftSLideForMatrix(listOfNumbers){
    var outputList = [];

    for(var i = 0; i< listOfNumbers.length; i++){
       outputList.push(leftSLide(listOfNumbers[i]));
    }
    return outputList;
}

function rightSLideForMatrix(listOfNumbers){
    var outputList = [];

    for(var i = 0; i< listOfNumbers.length; i++){
       outputList.push(rightSlide(listOfNumbers[i]));
    }
    return outputList;
}

function transposeMatrix(matrix){
return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

function slideUp(matrixOfNumbers){
    var matrixOfNumbers = transposeMatrix(matrixOfNumbers);
    for (var i = 0; i<matrixOfNumbers.length; i++){
        matrixOfNumbers[i] = leftSLide(matrixOfNumbers[i]);
    }
    matrixOfNumbers = transposeMatrix(matrixOfNumbers);
    return matrixOfNumbers;
}

function slideDown(matrixOfNumbers){
    var matrixOfNumbers = transposeMatrix(matrixOfNumbers);
    for (var i = 0; i<matrixOfNumbers.length; i++){
        matrixOfNumbers[i] = rightSlide(matrixOfNumbers[i]);
    }
    matrixOfNumbers = transposeMatrix(matrixOfNumbers);
    return matrixOfNumbers;
}

function randomTwo(arrayOfNumbers){
    var tempList = [];
    for(var i = 0; i< arrayOfNumbers.length; i++){
        for(var j = 0; j< arrayOfNumbers[i].length; j++){
            if(arrayOfNumbers[i][j] == 0){
                var temp = [];
                temp.push(i);
                temp.push(j);
                tempList.push(temp);
            }
        }
    }

    if(tempList.length == 0) {
        return arrayOfNumbers;
    }

    else{
    var randomIndex = Math.floor(Math.random() * Math.floor(tempList.length));
    arrayOfNumbers[tempList[randomIndex][0]] [tempList[randomIndex][1]] = 2;
    return arrayOfNumbers;
    }
}

function isGameOver(startingBoard){
    for(var i = 0; i< startingBoard.length; i++){
        if(startingBoard[i].includes(0)){
            return false;
        }
    }
    return true;
}

function isGameWon(startingBoard){
    for(var i = 0; i< startingBoard.length; i++){
        if(startingBoard[i].includes(2048)){
            return true;
        }
    }
    return false;
}

function gamePlay(startingBoard){
    console.log(startingBoard);
    while(!isGameOver(startingBoard)){
        if(isGameWon(startingBoard)){
            console.log("You are the champion");
            return;
        }
        console.log("I am here");
        var userMove = prompt("Enter your move. l for left, r for right, u for up and d for down");
        console.log("WOw");
        if(userMove == "l"){
            startingBoard = leftSLideForMatrix(startingBoard);
        }
        else if(userMove == "r"){
            startingBoard = rightSlide(startingBoard);
        }
        else if(userMove == "u"){
            startingBoard = slideUp(startingBoard);
        }
        else if(userMove == "d"){
            startingBoard = slideDown(startingBoard);
        }
        randomTwo(startingBoard);
        console.log(startingBoard);
    }
    return "What a loser!.";
}


 console.log(leftSLide([2, 2, 2, 0]));
// console.log(leftSLide([2, 2, 4, 4, 8, 8]));
// console.log(rightSlide([2, 2, 2, 0]));
// console.log(leftSLide([2, 2, 4, 4, 8, 8]));
// console.log(rightSlide([8,4,4,8]));

// console.log(slideUp([
//     [2, 2, 2, 0],
// 	[2, 4, 0, 4],
// 	[0, 2, 2, 0],
// 	[8, 4, 4, 8],
// ]
// ));

// console.log(slideDown([
//     [2, 2, 2, 0],
// 	[2, 4, 0, 4],
// 	[0, 2, 2, 0],
// 	[8, 4, 4, 8],
// ]
// ));

// console.log(randomTwo([
//     [2, 2, 2, 0],
// 	[2, 4, 0, 4],
// 	[0, 2, 2, 0],
// 	[8, 4, 4, 8],
// ]
// ));

 console.log(leftSLideForMatrix([
    [2, 2, 2, 0],
	[2, 4, 0, 4],
	[0, 2, 2, 0],
	[8, 4, 4, 8],
]
));

// console.log(rightSLideForMatrix([
//     [2, 2, 2, 0],
// 	[2, 4, 0, 4],
// 	[0, 2, 2, 0],
// 	[8, 4, 4, 8],
// ]
// ));

console.log(gamePlay([
    [2, 2, 2, 0],
	[2, 4, 0, 4],
	[0, 2, 2, 0],
	[8, 4, 4, 8],
]
));
