// 
const prompt = require("prompt-sync")({sigint: true})

 let marks = parseInt(prompt('Input student grades '));
 
function getUserInputAndCalculateGrade(m) {
    let output;
    if (!isNaN(marks)){
        if (m > 79 && m <= 100) {
            output = 'A';
        } else if (m >= 60 && m <= 79) {
            output ='B';
        } else if (m >= 50 && m<= 59) {
            output ='C';
        } else if (m >= 40 && m<= 49) {
            output ='D';
        } else if (m>= 0 && m <= 39 ) {
            output ='E';
        }else {
            output ="invalid input"
        }
    }else {
        output = "Nill"
    }
    return `Student's grade is: ${output}`
}

// Start the program
console.log(getUserInputAndCalculateGrade(marks));