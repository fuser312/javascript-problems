function gather(string) {
    return function(nextString) {
      if (nextString) {
        return string;
      } else {
        return gather(string +nextString);
      }
    }
  }
console.log(gather("ta", "ma", "ga"));



