// Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, 
//compute the person's itinerary. If no such itinerary exists, return null. All flights must be used in the itinerary.

// For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL',
// you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

// Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.


function findItinerary(listOfFlights, startAirport) {
    var finalList = [startAirport];
    var accountForDuplicates = [];
    for (var i = 0; i < listOfFlights.length; i++) {
        var duplicates = [];
        for (var j = 0; j < listOfFlights.length; j++) {
            if (listOfFlights[j][0] == startAirport) {
                duplicates.push(listOfFlights[j][1]);

            }

        }

        duplicates = duplicates.sort();
        if (arraysEqual(accountForDuplicates, duplicates)) {
            startAirport = duplicates[1];
            finalList.push(startAirport);
        }
        else {
            startAirport = duplicates[0];
            finalList.push(startAirport);
            if (duplicates.length > 1) {
                accountForDuplicates = duplicates;
            }
        }
    }
    if (finalList.length < listOfFlights.length + 1 || finalList.includes(undefined)) {
        return null;
    }
    return finalList;
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

 function findItineraryOne(airports, origin) {
    var result = [];
    
    
    var map = airports.reduce((acc, [from, to]) => {        
        if (acc[from]) {
            acc[from].push(to);
        } else {
            acc[from] = [to];
        }
        return acc;
    }, {});
    
    Object.values(map).forEach((to) => {
        to.sort();
    });

    function makeItinerary(from) {
        const tos = map[from];
        while(tos && tos.length > 0) {
            makeItinerary(tos.shift());
        }
        result.unshift(from);
    }
    
    makeItinerary(origin);
    
    return result;
};



// Continuing from previous challenge

// If there are multiple possible itineraries, return the lexicographically smallest one.

// Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', 
//you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. 
//However, the first one is lexicographically smaller.

// console.log(findItinerary([['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']], 'YUL'));
// console.log(findItinerary([['SFO', 'COM'], ['COM', 'YYZ']], 'COM'));
// console.log(findItinerary([['A', 'A'], ['A', 'A']], 'A'));
// console.log(findItinerary([['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']], 'A'));
//console.log(findItinerary([['A', 'B'], ['A', 'C'], ['C', 'A']], 'A'));
console.log(findItineraryOne([['A', 'B'], ['A', 'C'], ['B', 'C'],['C', 'A']], 'A'));
