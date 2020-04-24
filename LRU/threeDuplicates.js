// Given an array of integers where every integer occurs three times except for
// one integer, which only occurs once, find and return the non-duplicated integer.
//
// For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13],
// return 19.



function findNonDuplicate(numbers){
 var result = 0;
 for(var i = 0; i< numbers.length; i++){
   result = result + parseInt(numbers[i].toString(3));
   result = parseInt(xorForBaseThree(result));
 }
 return parseInt(result, 3);
}


function xorForBaseThree(number) {
  var newList = number.toString().split('');
    var result = [];
    for(var i = 0; i< newList.length; i++){
      //newList[i] = parseInt(newList[i]);
      result.push(newList[i] % 3);
    }
    return result.join('');
}


console.log(findNonDuplicate([6, 1, 3, 3, 3, 6, 6]));

console.log(findNonDuplicate([13, 19, 13, 13]));

