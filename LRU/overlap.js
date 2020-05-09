function joinOverlapping(word) {
    if(word.length === 0){
      return "";
    }
    else{
      let start = '';
      let minimum_overlap = Infinity;
      for (let i = 0; i < word.length - 1; i++) {
          let this_word = word[i];
          let next_word = word[i + 1];
          for (let j = 0;; j++) {
              if (this_word.substr(j) === next_word.substr(0, this_word.length - j)) {
                  start += this_word.substr(0, j);
                  break;
              }
          }
      }
      return start + word[word.length - 1];
    }
  }
  console.log(joinOverlapping(["helloo","ooo"]));
  console.log(joinOverlapping(["hello","oooo"]));
  console.log(joinOverlapping(["move", "over", "movery"]));
  console.log(joinOverlapping(["move", "over", "very"]));
  console.log(joinOverlapping(["oven", "envier", "erase", "serious"]));
  console.log(joinOverlapping(["to", "ops", "psy", "syllable"]));
  console.log(joinOverlapping( ["hellolo", "lololol"]))