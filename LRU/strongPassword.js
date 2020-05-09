function strongPassword(password) {
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";
  let totalToHave = 0;
  let newArr = password.split('');

  let requiredCharacters = [numbers, lower_case, upper_case, special_characters];

  let boolList = requiredCharacters.map((checkString) =>

    newArr.some(char =>
      checkString.includes(char)
    )
  )



  totalToHave += boolList.filter(boolItem => boolItem == false).length;
  console.log(`total have is : ${totalToHave}`);



  if ((totalToHave + password.length) < 6) {
    return 6 - password.length;
  } else {
    return totalToHave;
  }
}



console.log(strongPassword("Ed1"));
console.log(strongPassword("#Edabit"));
console.log(strongPassword("W1llth!spass?"));
console.log(strongPassword(""));
console.log(strongPassword("aaaaaa"));
console.log(strongPassword("aaaaa"));
