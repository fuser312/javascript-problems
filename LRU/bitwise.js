// Bitwise Operations
// A decimal number can be represented as a sequence of bits. To illustrate:

// 6 = 00000110
// 23 = 00010111
// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

// bitwiseAND(6, 23) ➞ 00000110
// bitwiseOR(6, 23) ➞ 00010111
// bitwiseXOR(6, 23) ➞ 00010001
// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

// Examples
// bitwiseAND(7, 12) ➞ 4
// bitwiseOR(7, 12) ➞ 15
// bitwiseXOR(7, 12) ➞ 11


function bitwiseOperation(num1, num2, operation) {
    bitNum1 = num1.toString(2);
    bitNum2 = num2.toString(2);
    if (bitNum1.length > bitNum2.length) {
        var x = bitNum1.length - bitNum2.length;
        for (var i = 0; i < x; i++) {
            bitNum2 = "0" + bitNum2;
        }
    }
    else if (bitNum2.length > bitNum1.length) {
        var x = bitNum2.length - bitNum1.length;
        for (var i = 0; i < x; i++) {
            bitNum1 = "0" + bitNum1;
        }
    }

    var result = "";
    var temp;
    for (i = 0; i < bitNum1.length; i++) {
        if (operation == "AND") {
           temp = parseInt(bitNum1[i]) && parseInt(bitNum2[i]);
        }
        if (operation == "OR") {
          temp = parseInt(bitNum1[i]) || parseInt(bitNum2[i]);
         }
        if (operation == "XOR") {
           temp = parseInt(bitNum1[i]) ^ parseInt(bitNum2[i]);
          }
          result = result + temp.toString();
      }
      return parseInt(result, 2);
}

function bitwiseAND(num1, num2) {
    return bitwiseOperation(num1, num2, "AND");
  }
  function bitwiseOR(num1, num2) {
    return bitwiseOperation(num1, num2, "OR");
  }
  function bitwiseXOR(num1, num2) {
    return bitwiseOperation(num1, num2, "XOR");
  }



  console.log(bitwiseAND(7, 12));
  console.log(bitwiseOR(7, 12));
  console.log(bitwiseXOR(7, 12));

