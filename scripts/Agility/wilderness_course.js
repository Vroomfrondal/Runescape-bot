// Script Purpose:
// Automatically trains agility
// Face compass North, Camera all the way up and zoomed in. Start right of pipe facing north.


// import the robotjs library
let robot = require('robotjs') //

function main() {
    for (let i = 0; i < 500; i ++) {
        runLaps()
        console.log("Laps completed: " + (i + 1))
        console.log("-----------------------")
    }
}

function runLaps() {
    sleep(2000) //debug use

    //move character to banking location
    console.log("Going through pipe....")
    robot.moveMouse(1137, 668)
    sleep(300)
    robot.mouseClick()
    sleep(1300)
    robot.moveMouse(1253, 568)
    sleep(300)
    robot.mouseClick()
    sleep(9000)

    console.log("Rope Swing")
    robot.moveMouse(1398, 149)
    sleep(300)
    robot.mouseClick()
    sleep(4000)

    console.log("Hopping Stones")
    robot.moveMouse(740, 571)
    sleep(300)
    robot.mouseClick()
    sleep(13500)

    console.log("Running to next location.")
    robot.moveMouse(2496, 191)
    sleep(300)
    robot.mouseClick()
    sleep(7000)

    console.log("Crossing log.")
    robot.moveMouse(1184, 764)
    sleep(300)
    robot.mouseClick()
    sleep(6000)

    console.log("Running to next location.")
    robot.moveMouse(2469, 162)
    sleep(300)
    robot.mouseClick()
    sleep(4200)

    console.log("Climbing wall.")
    robot.moveMouse(1256, 883)
    sleep(300)
    robot.mouseClick()
    sleep(4000)


    console.log("Running to pipe.")
    robot.moveMouse(2521, 112)
    sleep(300)
    robot.mouseClick()
    sleep(5000)
}

main()



// utility functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
