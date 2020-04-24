function removeLastVowel(word) {
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    for(var i = word.lengeth - 1; i>= 0; i--){
        if(vowel.indexOf(word[i]) >= 0){
            var newWord = word.slice(0, i) + word.slice(i+1);
            return newWord;
        }
    }
    return word;
}