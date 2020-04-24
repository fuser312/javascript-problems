// Challenge 1
// Group n Sort
// Create a function that takes in an array of numbers or strings and returns an array with the items from the original array stored in subarrays. Items of the same value should be in the same subarray.

// Examples
// groupNSort([2, 1, 2, 1]) ➞ [[2, 2], [1, 1]]

// groupNSort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]


// Challenge 2
// Same Letter Patterns
// Create a function that returns true if two strings share the same letter pattern, and false otherwise.
// Examples
// sameLetterPattern("ABAB", "CDCD") ➞ true

// sameLetterPattern("ABCBA", "BCDCB") ➞ true

// sameLetterPattern("FFGG", "CDCD") ➞ false

function groupNumbers(listOfNumbers){
    var tempSet = new Set(listOfNumbers);
    var finalList = [];
    for (var it = tempSet.values(), val= null; val=it.next().value; ) {
        var tempList = [];
        for(var i = 0; i< listOfNumbers.length; i++){
            if (val == listOfNumbers[i]){
                tempList.push(listOfNumbers[i]);
            }
        }
        finalList.push(tempList);
    }
    return finalList.sort().reverse();
}
    
    function sameLetterPattern(input1, input2){
      var sum1 = 0;
      var sum2 = 0;
      var myValue = 1;
    if(input1.Length != input2.Length){
      return false;
    }
  
    var set1 = new Set(input1);
    var set2 = new Set(input2);
    if(set1.size != set2.size){
      return false;
    }
    for(var i = 0; i< input1.length-1; i++){
     
        if(input1[i] == input1[i+1]){
          sum1++;
        }
        if(input2[i] == input2[i+1]){
          sum2++;
        }
      
    }
    console.log(sum1);
    console.log(sum2);
    return sum1 == sum2;
    }
  
  console.log(sameLetterPattern("ABCA", "pqrz"));
  console.log(sameLetterPattern("FFGG", "CDCD") );
  console.log(groupNumbers([5, 4, 5, 5, 4, 3]));