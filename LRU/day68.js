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
    add(element){
        if(!this.has(element)){
            this.collection.push(element);
            this.collection.sort;
        }
    }
    // write your remove method here
    remove(element){
        var index = this.collection.indexOf(element);
        this.collection.splice(index, 1);
    }
    // write your size method here
    size(){
        return this.collection.length;
    }

    union(elements){
       for(var i = 0; i< elements.collection.length; i++){
           this.add(elements.collection[i]);
       }
       return this.collection;
    }
    // change code above this line
}

var newSet = new Set();
var newSet2 = new Set();
var newSet3 = new Set();

newSet2.add(2);
newSet2.add(4);
newSet2.add(6);
newSet2.add(8);

newSet3.add(4);
newSet3.add(8);


console.log(newSet2.union(newSet3));

newSet.add(4);
newSet.add(8);
newSet.add(4);
console.log(newSet);
newSet.remove(8);
console.log(newSet);
console.log(newSet.size());
console.log(newSet2.collection);
