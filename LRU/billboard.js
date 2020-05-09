function canPut(word, billboard){
    let wordsList = word.split(" ");
    let wordsLengthArray = [];
    wordsList.forEach((word) => {
        wordsLengthArray.push(word.length);
    });
    
    let currentWordIndex = 0;
    for(let i = 0; i< billboard[0]; i++){
        let rowLength = billboard[1];
        while(rowLength > 0 && currentWordIndex !== wordsLengthArray.length){
            if(rowLength < wordsLengthArray[currentWordIndex]){
                rowLength = 0;
            }
            else if(rowLength === wordsLengthArray[currentWordIndex]){
                rowLength = 0;
                currentWordIndex++;
            }
            else{
                rowLength -= wordsLengthArray[currentWordIndex] + 1;
                currentWordIndex ++;
            }
        }
    }
    return currentWordIndex === wordsLengthArray.length;
}

console.log(canPut("GOOD MORN", [1,9]));
console.log(canPut("GOOD MORN", [1,8]));
console.log(canPut("GOOD MORN", [2,4]));
console.log(canPut("GOOD MORN JOHN", [2,4]));
 console.log(canPut("GOOD MORN JOHN", [3,3]));
console.log(canPut("S A HI L", [5,1]));
console.log(canPut("S A HI L", [1,5]));
// console.log(canPut("GOOD MORN", [3,3]));