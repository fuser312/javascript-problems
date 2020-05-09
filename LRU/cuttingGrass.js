function cuttingGrass(grassHeights, ...cuts) {
   let result = [];
   for(let i = 0; i< cuts.length; i++){
        let cutSize = cuts[i];
        grassHeights = grassHeights.map((grassHeight)=>grassHeight - cutSize);
        result.push(grassHeights.some((newHeight) => newHeight <= 0) ? "Done" : grassHeights);
   }
   return result;
   
}


console.log(cuttingGrass([3, 4, 4, 4], 1, 1, 1));
console.log(cuttingGrass([1, 0, 1, 1], 1, 1, 1));
console.log(cuttingGrass([5, 6, 7, 5], 1, 2, 1));