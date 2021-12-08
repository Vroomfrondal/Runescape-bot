// import the robotjs library

//let robot = require('robotjs')

console.log("Starting...")

// Move the mouse across the screen as a sine wave.
let robot = require("robotjs");
 
// Speed up the mouse.
robot.setMouseDelay(2);
 
let twoPI = Math.PI * 2.0;
let screenSize = robot.getScreenSize();
let height = (screenSize.height / 2) - 10;
let width = screenSize.width;
 
for (let x = 0; x < width; x++)
{
    y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
}

