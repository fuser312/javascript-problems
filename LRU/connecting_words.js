// Connecting Words
// Write a function that connects each previous word to the next word by the shared letters. 
//Return the resulting string (removing duplicate characters in the overlap).

function joinOverlapping(words) {
    let singleString = words.join("");
    //console.log(singleString);

    let finalResult = "";
    for (let i = 0; i < words.length - 1; i++) {
        //console.log(`print this : ${checkForOverlap(words[i], words[i+1])}`);
        finalResult += checkForOverlap(words[i], words[i + 1]);
        console.log(finalResult);
    }
    return finalResult;
}

function checkForOverlap(firstWord, secondWord) {
    for (let i = 0; i < firstWord.length; i++) {

        if (firstWord[i] == secondWord[0]) {
            let firstWordSubString = firstWord.substring(i, firstWord.length);


            if (firstWordSubString == secondWord.substring(0, firstWordSubString.length)) {
                // console.log(firstWordSubString);
                // console.log(firstWord.substring(0, i));
                // console.log(secondWord);
                // console.log(firstWord.substring(0,i) + secondWord);
                return firstWord.substring(0, i) + secondWord;
            }
        }

    }
}










//joinOverlapping(["oven", "envier", "erase", "serious"]) // "ovenvieraserious"
joinOverlapping(["move", "over", "very" ]) // "movery"
// joinOverlapping(["to", "ops", "psy", "syllable"]) // "topsyllable"
// joinOverlapping(["move", "over", "movery"]) // movery
// joinOverlapping(["move", "over", "mover"]) // mover
// joinOverlapping(["move", "over", "move"]) // movermove