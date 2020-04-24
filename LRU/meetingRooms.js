// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

// For example, given [[30, 75], [0, 50], [60, 150]], you should return 2.

function meetingRooms(intervals){
    var startTimes = [];
    var endTimes = [];
    for(var i = 0; i< intervals.length; i++){
        var interval = intervals[i];
        startTimes.push(interval[0]);
        endTimes.push(interval[1])
    }
     console.log(startTimes);
     console.log(endTimes);
    var meetRoom = startTimes.length;
    for(var j = 0; j< startTimes.length; j++){
        for(k = 0; k< startTimes.length; k++){
            if((startTimes[j] > startTimes[k] && startTimes[j] < endTimes[k]) || (endTimes[j] > startTimes[k] && endTimes[j] < endTimes[k])){
                break;
            }
            else{
                meetRoom--;
            }
        }
    }
    return meetRoom;
}

console.log(meetingRooms([[30, 75],  [60, 150], [0, 50]]));