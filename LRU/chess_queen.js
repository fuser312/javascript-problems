// Queen Threat
// Create a function that takes a character from a to h as the column number and an integer from 1 to 8 as the row number which together represent the location of a queen on a normal-sized chess board. Return this two dimensional 8x8 array.

// This array must consist of zeroes and ones. The ones are placed in positions where the queen can move in one move and zeroes represent positions on the board where it cannot.

// checkBoard("a", 1) ➞ [
//   [1, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 0, 1, 0],
//   [1, 0, 0, 0, 0, 1, 0, 0],
//   [1, 0, 0, 0, 1, 0, 0, 0],
//   [1, 0, 0, 1, 0, 0, 0, 0],
//   [1, 0, 1, 0, 0, 0, 0, 0],
//   [1, 1, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1]
// ]

// checkBoard("h", 4) ➞ [
//   [0, 0, 0, 1, 0, 0, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0, 1, 0, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 1, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0, 1]
// ]

function queenThreat(pos1, pos2){
    var myArray = [];
    for(i = 0; i < 8; i++){
    var temp=[];
    for(j = 0;j < 8; j++){
     temp.push(0);
    }
    myArray.push(temp);
    }
   
  
  
  var chessMap = {"a" : 0, "b" : 1, "c" : 2, "d" : 3, "e" : 4, "f" : 5, "g" : 6, "h" : 7};
  
  var x = 8 - pos2;
  var y = chessMap[pos1];
  for(i = 0; i < 8; i++){
    if(i != y){
      myArray[x][i] = 1;
    }
    if(i != x){
      myArray[i][y] = 1;
    }
  }
  
  for (i = x+1; i< 8; i ++){
    for(j = y+1; j< 8; j++){
      myArray[i][j] = 1;
    }
  }
  var temp = y
  for (i = x; i = 0; i --){
    console.log("print");
    temp--;
    console.log(temp);
    console.log(i);
    myArray[i][temp]  = 1;
      
     }
  
  //console.log(myArray);
  
  }
  
  queenThreat("h",4);