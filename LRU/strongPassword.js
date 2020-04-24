function orderPeople(order, number){
    let finalList = [];
    
    let min_point = order[1];
    let max_point = min_point + order[1];
    for(let i = 0; i< order[0]; i++){
        console.log(order[0]);
      let tempList = [];
      if(finalList.length === 0 || finalList.length%2 === 0){
        for(let j = 0; j< min_point; j++){
            console.log(min_point);
          tempList.push(j+1);
          min_point++;
          max_point++;
        }
        
      }
      else{
        for(let k = max_point; k>min_point; k-- ){
          tempList.push(k-1);
          min_point++;
          max_point++;
        }
      }
      finalList.push(tempList);
    }
    return finalList;
  }
  
  orderPeople([5, 3], 15);