// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// https://imgur.com/721N8hl

// How many such routes are there through a given 'gridSize'?
// latticePaths(4) should return 70.
// latticePaths(9) should return 48620.
// latticePaths(20) should return 137846528820.

function latticePaths(size) {
    var number = 1;
    for(var i = 0; i<size; i++){
        number*= (2 * size) - i;
        number = Math.floor( number / (i+1) );
    }
    return number;
  }

  console.log(latticePaths(20));

  //part 2

  // In this exercise we are going to create a class named Set to emulate an abstract data structure called "set". A set is like an array, but it cannot contain duplicate values. The typical use for a set is to simply check for the presence of an item.

// const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
// console.log(set1);
// // output: {0, 1, 2, 3, 5}
// console.log(set1.has(1));
// // output: true

// First, we will create an add method that adds a value to our set collection as long as the value does not already exist in the set in sorted manner. Then we will create a remove method that removes a value from the set collection if it already exists. And finally, we will create a size method that returns the number of elements inside the set collection.

class Set {
    constructor() {
    // collection will hold our set
    this.collection = [];
    }
    // this method will check for the presence of an element and return true or false
    has(element) {
        return this.collection.indexOf(element) !== -1;
    }
    // this method will return all the values in the set
    values() {
        return this.collection;
    }
    // change code below this line

    

    // write your add method here

    // write your remove method here

    // write your size method here

    // change code above this line
}
