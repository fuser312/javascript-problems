function kaprekar(num){
    const kaprekarNumber = 6174;
    let count = 1;
    let result = num;
      
      if (result === kaprekarNumber) {
          
          return 0;
      }
      else if(result === undefined){
       
        return "Invalid";
      }
    
    
      
      const numArray = String(num).split('');
    
      let max = (numArray.sort((a, b) => b-a).join(''));
     
      let min = Number(numArray.sort((a, b) => a-b).join(''));
    
      if(max.toString.length < 4){
          maxString = max.toString().padStart(4, "0");
        max = parseInt(maxString);
      }
      
      if(max - min === 0){
        return "Invalid";
      }
      else{
        
        if(max-min != kaprekarNumber){
          
          return 1 + kaprekar(max-min);
          
        }
        
          return count;
     
     
      }
    
  }
  
  console.log(kaprekar(5432));
  console.log(kaprekar(4000));
  console.log(kaprekar(1111));
  console.log(kaprekar(6621));
  console.log(kaprekar(6554));
  console.log(kaprekar(1234));
  console.log(kaprekar(6174));
  console.log(kaprekar(4444));