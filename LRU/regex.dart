
// Implement regular expression matching with the following special characters:
//
// - . (period) which matches any single character
// - * (asterisk) which matches zero or more of the preceding element
// That is, implement a function that takes in a string and a valid regular expression
// and returns whether or not the string matches the regular expression.
//
// For example, given the regular expression "ra." and the string "ray", your
// function should return true. The same regular expression on the string "raymond"
// should return false.
//
// Given the regular expression ".*at" and the string "chat", your function
// should return true. The same regular expression on the string "chats" should
// return false.

bool checkForDot(String orig, String changed){
 
 List <String> listOrig = orig.split("");
  List <String> listChanged = changed.split("");
  print(listOrig.length);
  print(listChanged.length);
  
  if(listOrig.length != listOrig.length){
    return false;
  }
  else if(listOrig.length == listOrig.length){
  for(int i = 0; i< listOrig.length; i++){
    if(listOrig[i] != listChanged[i] && (listOrig[i] != "." )){
      return false;
    }
    
  }
  }
  return true;
}

void main(){
  print(checkForDot("ra.", "raymond"));
}