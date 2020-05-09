
function joinOverlapping(words) {
  let count = Number.MAX_SAFE_INTEGER;;
  if (words.length == 1) {
    return words[0];
  }
  if (words.length === 0) {
    return "";
  }
  let finalString = words[0];
  for (let wordIndex = 0; wordIndex < words.length - 1; wordIndex++) {
    let tempString = remainderString(words[wordIndex], words[wordIndex + 1]);
    console.log(`first word is : ${words[wordIndex]}`);
    console.log(`second word is : ${words[wordIndex + 1]}`);

    finalString += tempString;

  }
  let finalList = [];
  finalList.push(finalString);
  return finalList;
}



function remainderString(firstWord, secondWord) {
  for (let i = 0; i < secondWord.length; i++) {
    let x = canOverlap(secondWord, firstWord, i);
    if (x == true) {
      console.log(`i is ${i}`);
      console.log(`my word is : ${secondWord[i]}`);
      return secondWord.slice(i+1, secondWord.length);
      break;
    }
  }
}

function canOverlap(word1, word2, num) {
  let word1List = word1.split("");
  let word2List = word2.split("");
  for (let i = 0; i < num; i++) {
    word1List.pop();
  }

  if (word1List.length > word2List.length) {

    return "false";

  }


  for (let i = 0; i < word1List.length; i++) {


    if (word1List.reverse()[i] !== word2List.reverse()[i]) {
      return false;
    }
  }
  return true;
}

remainderString("Hello", "oooo");

