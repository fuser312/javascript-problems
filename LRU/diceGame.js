function diceGame(resultArray) {
    let players = ["p1", "p2", "p3", "p4"];
    while (players.length != 1) {
        let indexOfPlayerToEliminate = "none";
        let score = Infinity;
        let newResult;
        if (indexOfPlayerToEliminate !== "null") {
            newResult = resultArray.splice(0, players.length);
        }

        ({ score, indexOfPlayerToEliminate } = playerIndex(newResult, score, indexOfPlayerToEliminate));

        if (indexOfPlayerToEliminate !== "none") {
            players.splice(indexOfPlayerToEliminate, 1);
        
        }
    }


    return players[0];

}



function playerIndex(newResult, score, indexOfPlayerToEliminate) {
    for (i = 0; i < newResult.length; i++) {
        let sum = newResult[i][0] + newResult[i][1];
        if (sum < score) {
            score = sum;
            indexOfPlayerToEliminate = i;
        }
        else if (sum === score) {
            if (newResult[i][0] < newResult[indexOfPlayerToEliminate][0]) {
                indexOfPlayerToEliminate = i;
            }
            else if (newResult[i][0] === newResult[indexOfPlayerToEliminate][0]) {
                indexOfPlayerToEliminate = "none";
            }
        }
    }
    return { score, indexOfPlayerToEliminate };
}

console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [3, 5], [1, 5], [4, 3], [1, 5], [1, 5], [5, 6], [2, 2]]));

function diceGame(resultArray) {
   
       let players = [1, 2, 3, 4];
      
       let loopingLength = 4;
       
       let startLooping = 0;
   
       while (loopingLength <= resultArray.length) {
           let player = 1;
           let minScore = Infinity;
           
           console.log(`looping length : ${loopingLength}`);
           for (i = startLooping; i < loopingLength; i++) {
               console.log(`start looping : ${startLooping}`);
               let sum = resultArray[i][0] + resultArray[i][1];
               if (sum < minScore) {
                   minScore = sum;
                   player = i + 1;
               }
               else if (sum === minScore) {
                   if (resultArray[player - 1][0] > resultArray[i][0]) {
                       player = i;
                   }
                   else if (resultArray[player - 1][0] < resultArray[i][0]) {
                       player = player;
                   }
                   else {
                       player = "draw";
                   }
               }
   
           }
           console.log(`player is : ${player}`);
           if (players.includes(player)) {
               let index = players.indexOf(player);
               console.log(`removed index is : ${index}`);
               players.splice(index, 1);
               console.log(players);
               startLooping += loopingLength;
               loopingLength += players.length;
               player = 1;
        
   
           }
           else{
               startLooping = loopingLength;
               loopingLength += players.length;
               
           }
       }
       return players;
   }
   
   console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [3, 5], [1, 5], [4, 3], [1, 5], [1, 5], [5, 6], [2, 2]]));