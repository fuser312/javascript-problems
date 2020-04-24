// Given a list of length 'n' with each element in the range 1 to n, 
// find the first duplicate element
// Example
// [1, 2, 2, 1, 5]
// output -> 2


// Challenge 2 : What is time complexity of your algorithm?
// e.g O(n), O(n^2), O(log n)


function duplicate(listOfNumber){
    var lowestIndex = listOfNumber.length;
     
 
     for(var i = 0; i< listOfNumber.length-1; i++){
         for(var j = i+1; j< listOfNumber.length; j++){
             if((listOfNumber[i] == listOfNumber[j]) && j < lowestIndex){
                 lowestIndex = j;
                 break;
             }
         }
     }
     return listOfNumber[lowestIndex];
   }


   function secondDuplicate(listOfNumber){
    var lowestIndex = listOfNumber.length;

 
    for(var i = 0; i< listOfNumber.length; i++){
            var pos1 = listOfNumber.indexOf(listOfNumber[i], i +1);
           // console.log(pos1);
            if(lowestIndex > pos1 && pos1 != -1){
                lowestIndex = pos1;
            }
        
    }
    return listOfNumber[lowestIndex];
   }


   function thirdDuplicate(listOfNumber){
    var newList =Array(listOfNumber.length).fill(0);
    for(var i = 0; i<listOfNumber.length; i++){
        var temp = listOfNumber[i];
        if(newList[temp]){
            return temp;
        }
        else{
            newList[temp] = 1;
        }
    }
}


   var randomList = Array.from({length: 40000000}, () => Math.floor(Math.random() * 4000));

//    var x = Date.now();
//    console.log(duplicate(randomList));
//    var y = Date.now();
//    console.log(y-x);
var begin = Date.now();
console.log(thirdDuplicate(randomList));
var finished = Date.now();
console.log(finished - begin);
   
   var start = Date.now();
   console.log(secondDuplicate(randomList));
   var end = Date.now();
   console.log(end - start);

   
   



   