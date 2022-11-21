/* Mario Petrizzelli
College Grade Calculator
20 11 2022
*/


function myFunction() {
    var numberSubjects = document.getElementById("subjects").value;
    var matrix = "";
    if (numberSubjects == 0) {
        document.getElementById("table").innerHTML = "You did not attend any subjects in our college </br>";
        document.getElementById("table").innerHTML += `</br> <input type="button" value="Reset" onclick="reset()">`;
    }
    else {
        document.getElementById("table").innerHTML = "</br> Please insert the <b>subjects (left field)</b> and the <b>marks you got (right field)</b> </br>";
        for (var i = 1; i <= numberSubjects; i++) {
            matrix = `<input type="text" class="subject"> <input type="text" class="mark"> </br>`;
            document.getElementById("table").innerHTML += matrix;
        }
        document.getElementById("table").innerHTML += `</br> <input type="button" value="Calculator" onclick="results()"> <input type="button" value="Reset" onclick="reset()">`;
    }
}

// Get all results in the page and perform the calcuations on button click
function results() {
    var arrayMarks = document.getElementsByClassName('mark');
    var totalSum = 0;
    var averageMark;
    var arraySubjects = document.getElementsByClassName('subject');

    // Grade calculator (BONUS)
    var arrayGrades = new Array(arrayMarks.length);
    for (var z = 0; z < arrayGrades.length; z++) {
        if (arrayMarks[z].value >= 90) {
            arrayGrades[z] = "A+";
        } else if (arrayMarks[z].value >= 85 && arrayMarks[z].value <= 89) {
            arrayGrades[z] = "A";
        } else if (arrayMarks[z].value >= 80 && arrayMarks[z].value <= 84) {
            arrayGrades[z] = "A-";
        } else if (arrayMarks[z].value >= 76 && arrayMarks[z].value <= 79) {
            arrayGrades[z] = "B+";
        } else if (arrayMarks[z].value >= 72 && arrayMarks[z].value <= 75) {
            arrayGrades[z] = "B";
        } else if (arrayMarks[z].value >= 68 && arrayMarks[z].value <= 71) {
            arrayGrades[z] = "B-";
        } else if (arrayMarks[z].value >= 64 && arrayMarks[z].value <= 67) {
            arrayGrades[z] = "C+";
        } else if (arrayMarks[z].value >= 60 && arrayMarks[z].value <= 63) {
            arrayGrades[z] = "C";
        } else if (arrayMarks[z].value >= 55 && arrayMarks[z].value <= 59) {
            arrayGrades[z] = "C-";
        } else if (arrayMarks[z].value >= 50 && arrayMarks[z].value <= 54) {
            arrayGrades[z] = "D";
        } else {
            arrayGrades[z] = "F";
        }
    }

    // Average mark calculation, based on user's input
    for (var i = 0; i < arrayMarks.length; i++) {
        if (parseInt(arrayMarks[i].value))
            totalSum += parseInt(arrayMarks[i].value);
    }
    averageMark = totalSum / arrayMarks.length;

    // Grade calculator on average
    var gradeAverage;
    if (averageMark >= 90) {
        gradeAverage = "A+";
    } else if (averageMark >= 85 && averageMark <= 89) {
        gradeAverage = "A";
    } else if (averageMark >= 80 && averageMark <= 84) {
        gradeAverage = "A-";
    } else if (averageMark >= 76 && averageMark <= 79) {
        gradeAverage = "B+";
    } else if (averageMark >= 72 && averageMark <= 75) {
        gradeAverage = "B";
    } else if (averageMark >= 68 && averageMark <= 71) {
        gradeAverage = "B-";
    } else if (averageMark >= 64 && averageMark <= 67) {
        gradeAverage = "C+";
    } else if (averageMark >= 60 && averageMark <= 63) {
        gradeAverage = "C";
    } else if (averageMarke >= 55 && averageMark <= 59) {
        gradeAverage = "C-";
    } else if (averageMark >= 50 && averageMark <= 54) {
        gradeAverage = "D";
    } else {
        gradeAverage = "F";
    }

    // Output all subjects, marks + grade (BONUS) 
    var output = "";
    for (var j = 0; j < arraySubjects.length; j++) {
        output = `In <b>` + arraySubjects[j].value + `</b> you got <b>` + arrayMarks[j].value + `</b> which is a: <b>` + arrayGrades[j] + `</b> grade </br>`;
        document.getElementById("results").innerHTML += output;
    }
    document.getElementById("results").innerHTML += `The <b>average mark</b> you got <b>accross all your subjects</b> was: <b>` + averageMark + `</b> which is a: <b>` + gradeAverage + `</b>`;
}

// Reloading the page to reset the program/page
function reset() {
    location.reload();
}
