
function plusMinus(arr) {
    let plusCount = 0;
    let minusCount = 0;
    let zeroCount = 0;
    for (let i = 0; i< arr.length; i++){
        if(arr[i] > 0){
            plusCount++;
            
        }
        else if(arr[i] < 0){
            minusCount++;
        }
        else{
            zeroCount++;
        }
        
    }
   return `${plusCount/arr.length}\n${minusCount/arr.length}\n${zeroCount/arr.length}`;
}


plusMinus([-4, 3, -9, 0, 4, 1]);