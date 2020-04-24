function makePlusFunction(number){
    return  (num)=>{
      number + num;
    };
 }
 
 const plusFive = makePlusFunction(5);
 console.log(plusFive(2));