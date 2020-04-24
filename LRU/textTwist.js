function totalPoints(guessedWords, scrambledWord) {
    let score = 0;
    let validWord = true;
    let scoreMap = { 3: 1, 4: 2, 5: 3, 6: 54 };

    for (let wordIndex = 0; wordIndex < guessedWords.length; wordIndex++) {
        validWord = true;
        if (guessedWords[wordIndex].length > 2) {

            for (let letterIndex = 0; letterIndex < guessedWords[wordIndex].length; letterIndex++) {

                if (!checkForSameNoOfLetter(guessedWords[wordIndex], scrambledWord, guessedWords[wordIndex][letterIndex])) {


                    validWord = false;
                }
            }


            if (validWord) {
                score += scoreMap[guessedWords[wordIndex].length];
            }
        }


    }
    return score;
}

function checkForSameNoOfLetter(word1, word2, letter) {
    var count = 0;
    var count1 = 0;

    word1.split("").forEach((v) => (v === letter && count++));
    word2.split("").forEach((v) => (v === letter && count1++));

    return count1 >= count;
}



console.log(totalPoints(["cat", "create", "sat"], "caster"));
console.log(totalPoints(["trance", "recant"], "recant"));
console.log(totalPoints(["dote", "dotes", "toes", "set", "dot", "dots", "sted"], "tossed"));
console.log(totalPoints(["ma", "ta"], "mat"));
console.log(totalPoints(["tsa", "ta"], "caster"));
console.log(totalPoints(["teaser", "ta"], "caster"));
console.log(totalPoints(["ttt"], "tenant"));

