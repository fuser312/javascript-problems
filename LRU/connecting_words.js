function joinOverlapping(word) {
  if (word.length === 0) {
    return "";
  }
  else {
    let start = '';
    for (let i = 0; i < word.length - 1; i++) {
      let this_word = word[i];
      let next_word = word[i + 1];
      start = overlapping(this_word, next_word, start);
    }
    return start + word[word.length - 1];
  }
}

function overlapping(this_word, next_word, start) {
  let j = 0;
  while (this_word.substr(j) !== next_word.substr(0, this_word.length - j)) {
    j++;
  }
  start += this_word.substr(0, j);
  return start;
}
console.log(joinOverlapping(["helloo", "ooo"]));
console.log(joinOverlapping(["hello", "oooo"]));
console.log(joinOverlapping(["move", "over", "movery"]));
console.log(joinOverlapping(["move", "over", "very"]));
console.log(joinOverlapping(["oven", "envier", "erase", "serious"]));
console.log(joinOverlapping(["to", "ops", "psy", "syllable"]));
console.log(joinOverlapping(["hellolo", "lololol"]))


