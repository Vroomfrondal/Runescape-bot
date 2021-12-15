// Script Purpose:
// Fishes & banks Monkfish in Piscatoras Fishing Colony.
// Face compass north, turn camera all the way up. Fullscreen mode. 2nd to most western spot

// import the robotjs library
let robot = require('robotjs') //


console.log("--------------")
console.log("Starting up...")
console.log("--------------")
sleep(2000)

function main() {
    for (let i = 0; i < 500; i++) {
        noteLogs()
        fish()
        sleep(15000)
    }
}

function fish() {
    let starting_x = 1264
    let starting_y = 625

    console.log("Fishing...")
    //loop to start fishing
    for(let i = 0; i < 2; i++) {
        sleep(400) // furnance misclick bug fix
        robot.moveMouse(starting_x, starting_y)
        sleep(25000)
    }
}

function noteLogs() {
    //move character to banking location
    console.log("Noting logs")
    robot.moveMouse(1322, 234)
    robot.mouseClick()
    sleep(2000)

    console.log("Going to fish...")
    robot.moveMouse(1397, 1388)
    robot.mouseClick()
    sleep(30000)
}

main()




// utility functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
