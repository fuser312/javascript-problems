function nearestElement(target, numbers){
    let numbersCopy = Array.from(numbers);
    let sortedNumbersList = numbers.sort(function(a,b){ 
    return a - b;
  });
      let differenceList = sortedNumbersList.map(number =>  Math.abs(number - target));
      console.log(differenceList);
      let minDiff =  Math.min(...differenceList);
    let reverseSortedNumberList = sortedNumbersList.reverse();
    console.log(reverseSortedNumberList);
      let reverseDifferenceList = differenceList.reverse();
      console.log(reverseDifferenceList);
      let indexOfMinDiff = reverseDifferenceList.indexOf(minDiff);
      let num = reverseSortedNumberList[indexOfMinDiff];
      console.log(`number is : ${num}`);
      console.log(numbers);
      return numbersCopy.indexOf(num);
      
  }
  
  console.log(nearestElement(50, [100, 49, 51]));