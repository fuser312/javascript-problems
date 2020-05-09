function orderPeople(order, number){
    let finalList = [];
    let noOfLines = order[0];
    let peoplePerLine = order[1];
    
    if(noOfLines * peoplePerLine < number){
      return "overcrowded";
    }

    for(let row = 0; row < noOfLines; row++){
      let tempList = [];
      for(let col = 1; col < peoplePerLine+ 1; col++){
        if(col + row * peoplePerLine < number+1){
          console.log(`col is : ${col + row * peoplePerLine}`);
          console.log(`number is : ${number}`);
        tempList.push(col + row * peoplePerLine);
        }
        else{
          console.log("nay");
          tempList.push(0);
        }
      }
      if(finalList.length%2 !== 0){
        tempList.reverse();
      }
      finalList.push(tempList);
     
    }
    return finalList;

    
  }
  
  console.log(orderPeople([4, 3], 20));
  console.log(orderPeople([5, 3], 15));
  console.log(orderPeople([4, 3], 5));
  console.log(orderPeople([3, 3], 8));
  console.log(orderPeople([4, 4], 9));
  console.log(orderPeople([4, 4], 22));


  function orderPeople(order, number){
    let finalList = [];
    let noOfLines = order[0];
    let peoplePerLine = order[1];
    if(noOfLines * peoplePerLine < number){
      return "overcrowded";
    }
    let maxCount = 0;
    let minCount = 0;
    
    for(let row = 0; row < noOfLines; row++){
      maxCount = maxCount + peoplePerLine;
      let tempList = [];
      for(let col = minCount; col < maxCount; col++){
        if(col + 1 < number+1){
        tempList.push(col + 1);
        }
        else{
          tempList.push(0);
        }
      }
      if(finalList.length%2 !== 0){
        tempList.reverse();
      }
      minCount = minCount + peoplePerLine;
      finalList.push(tempList);
    }
    return finalList;
  }
  
  console.log(orderPeople([4, 3], 20));
  console.log(orderPeople([5, 3], 15));
  console.log(orderPeople([4, 3], 5));
  console.log(orderPeople([3, 3], 8));
  console.log(orderPeople([4, 4], 9));
  console.log(orderPeople([4, 4], 22));