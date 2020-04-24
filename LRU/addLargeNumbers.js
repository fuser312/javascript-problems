// Add the numbers given in the list below and return all digits 


  
  function addLargeNumbers(testNums){
  var z = 0;
  var thisList = [];
  for(var i = testNums[0].length-1; i >= 0; i--){
      console.log(z);
      var x = parseInt(testNums[0][i]);
      var y = parseInt(testNums[1][i]);
      var finalSUm = addNumbers(x, y, z);
      var z = carryOver(x, y);
      var stringSum = finalSUm.toString();
      thisList.push(stringSum); 
  }
  return thisList.reverse().join("");
}

  
  function addNumbers(a, b, c){
      if(c == 0){
          if(a + b > 10){
              c = 1;
              return (a + b) - 10;
          }
          else {
              c = 0;
              return a + b
          }
      }
      else if(c == 1){
        if(a + b + c> 10){
            c = 1;
            return (a + b + c) - 10;
        }
        else {
            c = 0;
            return a + b + c
        }
      }
  }

  function carryOver(first, second){
      if(first + second > 10){
          return 1;
      }
      else {
          return 0;
      }
  }

  const testNumbers = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
  ];

  console.log(addLargeNumbers(testNumbers));