// Height of the Tallest Building
// Given an array of strings (depicting a skyline of several buildings), return in meters the height of the tallest building. Each line in the list represents 20m.

// tallestBuildingHeight([
//   "            ##",
//   "            ##",
//   "            ##",
//   "###   ###   ##",
//   "###   ###   ###",
//   "###   ###   ###",
//   "###   ###   ###"
// ]) ➞ "140m"

// // Tallest building is 7 rows
// // 7 x 20m = 140m

// tallestBuildingHeight([
//   "               ",
//   "               ",
//   "               ",
//   "       #    ###",
//   "      # #   ###",
//   "###   ###   ###",
//   "###   ###   ###"
// ]) ➞ "80m"


// Challenge 2
// Something in the Box?
// Create a function that returns true if an asterisk * is inside a box.
// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true

// inBox([
//   "####",
//   "# *#",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) ➞ false

function tallestBuildingHeight(arr) {
    var count = arr.length;
    var emptyList = [];
    for(var i = 0; i< arr.length; i++){
        arr[i] = (arr[i].trim());
        if(arr[i] == ""){
            count--;
        }
        
    }
    
    count = count * 20;
    return count;
  }

  console.log(tallestBuildingHeight([
    "            ##",
    "            ##",
    "            ##",
    "###   ###   ##",
    "###   ###   ###",
    "###   ###   ###",
    "###   ###   ###"
  ]));

  console.log(tallestBuildingHeight([
    "               ",
    "               ",
    "               ",
    "       #    ###",
    "      # #   ###",
    "###   ###   ###",
    "###   ###   ###"
  ]));
  

  function inBox(arr){
    for(var i = 0; i< arr.length; i++){
        arr[i] = arr[i].trim();
        var x = arr[i].split("");
        if( i!= 0 && i != arr.length){
        for(var j = 0; j< x.length; j++){
            if(x[j] == "*" && (j != x.length && j!= 0)){
                return true;
            }
        }
        }
    }
    return false;
  }

  console.log(inBox([
    "####",
    "# *#",
    "#  #",
    "####"
  ]));

  console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ]));

  console.log(inBox([
    "###",
    "#*#",
    "###"
  ]));