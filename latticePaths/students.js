
// Challenge 2
// Create a function that takes an array of objects like { name: "Surendra Sharma", scores: [3, 5, 4]} and returns an array of objects like { name: "Surendra Sharma", avgScore : 4 }. If student has no scores (an empty array) then let's assume avgScore: 0.
// Then print 5 students with highest scores sorted alphabetically by their last name

var students = [
    {
        name: "Surendra Sharma", scores: [3, 5, 4]
    },
    {
        name: "Raj Doshi", scores: [12, 8, 3]
    },
    {
        name: "Vinay Iyer", scores: [31, 5, 14]
    },
    {
        name: "Rahul Khoiwal", scores: [11, 66]
    },
    {
        name: "Aditya Singh", scores: [22, 15, 7]
    },
    {
        name: "Daksh Verma"
    },
    {
        name: "Sukanya Mishra", scores: [19]
    },
    {
        name: "Ananya", scores: [14, 22, 56, 8]
    },
]

function sortStudents(students){
    var listOfStudentScores = [];

for (var i = 0; i < students.length; i++) {
    if (students[i].scores === undefined) {
        students[i].averageScore = 0;
        var obj = {};
        obj.name = students[i].name;
        obj.averageScore = students[i].averageScore;
        listOfStudentScores.push(obj);
    }
    else {
        students[i].averageScore = average(students[i].scores);
        var obj = {};
        obj.name = students[i].name;
        obj.average = students[i].averageScore;
        listOfStudentScores.push(obj);
    }
}


for(var i = 0; i< listOfStudentScores.length -1; i++){
    for (var j = 0; j< listOfStudentScores.length; j++){
        if (listOfStudentScores[i].averageScore < listOfStudentScores[j].averageScore) {
            var temp = listOfStudentScores[i];
            listOfStudentScores[i] = listOfStudentScoresj[j];
            listOfStudentScores[j] = temp;
          }
    }
}

var topFiveStudents = listOfStudentScores.slice(0, 5);
var topFiveStudentsByName = topFiveStudents.sort(compareLastNames);
return topFiveStudentsByName;
}

function average(listOfScores) {
    var finalSum = listOfScores.reduce(function (a, b) {

        return a + b;


    }, 0);
    return finalSum / listOfScores.length
}

function compareLastNames(a, b) {
        var splitA = a.name.split(" ");
        var splitB = b.name.split(" ");
        var lastA = splitA[splitA.length - 1];
        var lastB = splitB[splitB.length - 1];
    
        if (lastA < lastB) return -1;
        if (lastA > lastB) return 1;
        return 0;
    }


console.log(sortStudents(students));