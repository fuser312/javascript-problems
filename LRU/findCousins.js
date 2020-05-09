function areCousins(root, x, y){
  
  let prevDepth = [];  
  let result = [];
  let countForNull = 0;
  let branches = 0;
 
  while (root.length !== 0) {
   
    
     
      if(prevDepth.includes(null)){
       countForNull  = nullCount(prevDepth);
      
       depthArray = root.splice(0, (Math.pow(2, branches)-(2 * countForNull)));
     
       result.push(depthArray);
      }
      depthArray = root.splice(0, Math.pow(2, branches));
     
      prevDepth = depthArray;
      result.push(depthArray);
      branches++;
     
     
    }

  for(let i = 2; i< result.length; i++){
    if(result[i].includes(x) && result[i].includes(y)){
      let indexOfx = result[i].indexOf(x);
      let indexOfy = result[i].indexOf(y);
      let diff = Math.abs(indexOfx - indexOfy);
      if(diff !== 1){
        return true;
      }
      else{
        let smallerIndex = Math.min(indexOfx, indexOfy);
        console.log(`smaller index is : ${smallerIndex}`);
        if(smallerIndex%2 !== 0){
          return true;
        }
      }
    }
  }
  return false;

}

function nullCount(depthArray){
    let counts = 0;

for (let i = 0; i < depthArray.length; i++) {
  if(depthArray[i] == null){
      counts++;
  }
}
return counts;
}
console.log(areCousins([1, 2, null, 3, 4, 5, null, 6], 5, 6));
console.log(areCousins([1, 2, 3, 4], 4, 3));
console.log(areCousins([1, 2, 3, null, 4, null, 5], 5, 4));
console.log(areCousins([1, 2, 3, null, 4], 2, 3));