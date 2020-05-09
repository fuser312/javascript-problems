
 function areCousins(root, x, y) 
{
  let result = [];
  for (let i = 0; ; i++) {
      if (root.length === 0) {
          break;
      }
      result.push(root.splice(0, Math.pow(2, i)))
  }
  console.log(result);
  for(let i = 2; i< result.length; i++){
    if(result[i].includes(x) && result[i].includes(y)){
      let indexOfx = result[i].indexOf(x);
      let indexOfy = result[i].indexOf(y);
      let diff = Math.abs(indexOfx - indexOfy);
      if(diff !== 1){
        console.log("where");
        return true;
      }
      else{
        console.log("here");
        let smallerIndex = Math.min(indexOfx, indexOfy);
        console.log(`smaller index is : ${smallerIndex}`);
        if(smallerIndex%2 !== 0){
          return true;
        }
      }
    }
  }
  return false;
};


 console.log(areCousins([1, 2, 3, null, 4], x = 2, y = 3));
