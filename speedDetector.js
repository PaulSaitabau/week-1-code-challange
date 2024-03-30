const prompt = require("prompt-sync")({sigint: true})

 let speed = parseInt(prompt('Input speed '));

function calculateDemeritPoints(s) {
    // Initialize a variable to hold the demerit points
    let demeritPoints = 0;

    // Check if the speed is less than 70
    if (s < 70) {
        // If the speed is less than 70, no demerit points are added
        return "Ok";
    } else {
        // Calculate the number of demerit points
        demeritPoints = Math.floor(( - 70) / 5);
    }

    // Check if the driver has more than 12 points
    if (demeritPoints > 12) {
        // If the driver has more than 12 points, their license is suspended
        return "License suspended";
    } else {
        // If the driver has 12 points or less, return the number of points
        return `Points: ${demeritPoints}`;
    }
}
console .log(calculateDemeritPoints(speed))