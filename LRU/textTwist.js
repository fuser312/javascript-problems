function totalPoints(guessedWords, scrambledWord) {
    let score = 0;
    let validWord = true;
    let scoreMap = { 1: 0, 2: 0, 3: 1, 4: 2, 5: 3, 6: 54 };

    for (let wordIndex = 0; wordIndex < guessedWords.length; wordIndex++) {
        validWord = true;

        validWord = isWordValid(guessedWords, wordIndex, scrambledWord);


        if (validWord) {
            score += scoreMap[guessedWords[wordIndex].length];
        }



    }
    return score;
}

function isWordValid(guessedWords, wordIndex, scrambledWord) {
    for (let letterIndex = 0; letterIndex < guessedWords[wordIndex].length; letterIndex++) {
        if (!checkForSameNoOfLetter(guessedWords[wordIndex], scrambledWord, guessedWords[wordIndex][letterIndex])) {
            return false;
        }
    }
    return true;
}

function checkForSameNoOfLetter(word1, word2, letter) {
    var countForWord1 = 0;
    var countForWord2 = 0;

    word1.split("").filter((v) => (v === letter && countForWord1++));
    word2.split("").filter((v) => (v === letter && countForWord2++));

    return countForWord2 >= countForWord1;
}



console.log(totalPoints(["cat", "create", "sat"], "caster"));
console.log(totalPoints(["trance", "recant"], "recant"));
console.log(totalPoints(["dote", "dotes", "toes", "set", "dot", "dots", "sted"], "tossed"));
console.log(totalPoints(["ma", "ta"], "mat"));
console.log(totalPoints(["tsa", "ta"], "caster"));
console.log(totalPoints(["teaser", "ta"], "caster"));
console.log(totalPoints(["ttt"], "tenant"));

//No idea what is the edge case that is failing, mine cases are passing.