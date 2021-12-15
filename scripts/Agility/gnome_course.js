// Script Purpose:
// Power Fishes salmon & trout in shilo village at the western most spot.
// Face compass North, Camera all the way up and zoomed in. Start in front of log.


// import the robotjs library
let robot = require('robotjs') //

function main() {
    for (let i = 0; i < 100; i ++) {
        runLaps()
    }
}

function runLaps() {
    sleep(4000) //debug use

    //move character to banking location
    console.log("Running over first log")
    robot.moveMouse(1257, 938)
    robot.mouseClick()
    robot.mouseClick()
    sleep(6000)

    console.log("Running to climb net.")
    robot.moveMouse(1160, 1384)
    robot.mouseClick()
    sleep(3200)

    console.log("Climbing branch.")
    robot.moveMouse(1091, 1004)
    robot.mouseClick()
    sleep(3500)

    console.log("Climbing tightrope.")
    robot.moveMouse(2032, 745)
    sleep(100)
    robot.mouseClick()
    sleep(6000)

    console.log("Climbing second branch.")
    robot.moveMouse(1812, 876)
    sleep(100)
    robot.mouseClick()
    sleep(3000)

    console.log("running to net")
    robot.moveMouse(1264, 66)
    robot.mouseClick()
    sleep(3000)


    console.log("Climbing net.")
    robot.moveMouse(1299, 470)
    robot.mouseClick()
    sleep(3200)

    console.log("Running to Tunnel.")
    robot.moveMouse(1135, 132)
    robot.mouseClick()
    sleep(7000)

    console.log("Running to Start.")
    robot.moveMouse(2432, 137)
    robot.mouseClick()
    sleep(1000)

}

main()


// utility functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
