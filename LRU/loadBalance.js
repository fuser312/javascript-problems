class LoadBalancer {
    constructor(configurationArray){
      this.configurationArray = configurationArray;
    }
     chooseReplica(){
        let result = this.configurationArray.reduce(function(sum, item){
            return sum = sum+item.load;
        },0);

        let balancerWithPercent = this.configurationArray.map(x => (x.load = x.load * 100/result));
      

        let randomNum = Math.floor(Math.random() * Math.floor(100));
        let sum = 0;
        let finalResult;
        for(let i = 0; i < balancerWithPercent.length; i++){
            sum += balancerWithPercent[i];
            if(randomNum < sum){
                finalResult = i;
                break;
            }
            
        }
        
      
        return this.configurationArray[finalResult].replica;
    }
  }
  
  let balancer = new LoadBalancer(
      [
          {replica : "replica1", load : 2},
          {replica : "replica2", load : 1},
          {replica : "replica3", load : 3},
      ]
  );
 
  console.log(balancer.chooseReplica());