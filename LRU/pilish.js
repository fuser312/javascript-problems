function pilish(words) {

    if (words.length === 0) {
        return ""
    }

    let finalList = [];
    let pi = 314159265358979;
    let piString = pi.toString();


    let temp = "";

   let count = 0;

    for(let i = 0; i< piString.length; i++){
        let temp = words.substr(count, parseInt(piString[i]));
        finalList.push(temp);
        count += parseInt(piString[i]);
       
    }
    if(finalList.includes("")){
        let spaceIndex = finalList.indexOf("");
        finalList.splice(spaceIndex);

    }
    if(finalList[finalList.length-1].length != piString[finalList.length-1]){
        let word = finalList[finalList.length-1];
        let char = word[word.length-1];
        while(finalList[finalList.length-1].length < piString[finalList.length-1]){
            finalList[finalList.length-1] += char;
        }
    }
    return finalList.join(" ");

    return finalList;
}

console.log(pilish("HOWINEEDADRINKALCOHOLICINNATUREAFTERTHEHEAVYLECTURESINVOLVINGQUANTUMMECHANICSANDALLTHESECRETSOFTHEUNIVERSE"));
console.log(pilish("FORALOOP"));
console.log(pilish("33314444"));
console.log(pilish("CANIMAKEAGUESSNOW"));