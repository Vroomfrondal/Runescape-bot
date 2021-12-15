// Script Purpose:
// Automatically trains agility
// Face compass North, Camera all the way up and zoomed in. Start in front of rope swing facing east


// import the robotjs library
let robot = require('robotjs') //

function main() {
    for (let i = 0; i < 100; i ++) {
        runLaps()
    }
}

function runLaps() {
    sleep(2000) //debug use

    //move character to banking location
    console.log("Crossing Rope Swing")
    robot.moveMouse(1300, 859)
    sleep(100)
    robot.mouseClick()
    sleep(2500)

    console.log("Running over long log.")
    robot.moveMouse(1138, 1222)
    sleep(200)
    robot.mouseClick()
    sleep(9000)

    console.log("Going to net.")
    robot.moveMouse(778, 805)
    sleep(200)
    robot.mouseClick()
    sleep(2800)

    console.log("Crossing wall.")
    robot.moveMouse(1021, 573)
    sleep(200)
    robot.mouseClick()
    sleep(5000)

    console.log("Going down ladder.")
    robot.moveMouse(1260, 1003)
    sleep(100)
    robot.mouseClick()
    sleep(2500)

    console.log("Going to next spot.")
    robot.moveMouse(2493, 105)
    robot.mouseClick()
    sleep(3000)


    console.log("Crumbling wall 1.")
    robot.moveMouse(1360, 598)
    sleep(200)
    robot.mouseClick()
    sleep(3400)

    console.log("Crumbling wall 2.")
    robot.moveMouse(1684, 724)
    sleep(200)
    robot.mouseClick()
    sleep(3000)

    console.log("Crumbling wall 3.")
    robot.moveMouse(1683, 713)
    sleep(200)
    robot.mouseClick()
    sleep(3000)

    // bug fix
    console.log("Clicking Ground.")
    robot.moveMouse(1294, 731)
    robot.mouseClick()
    sleep(500)

    console.log("Completed lap.")
    robot.moveMouse(2507, 130)
    sleep(200)
    robot.mouseClick()
    sleep(3000)

}

main()



// utility functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
