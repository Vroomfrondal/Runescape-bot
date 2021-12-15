// import the robotjs library
let robot = require('robotjs') //

function bank() {
    sleep(4000) //debug use

    //move character to banking location
    console.log("Crossing Rope Swing")
    robot.moveMouse(1256, 933)
    robot.mouseClick()
    sleep(4000)

    console.log("Running over long log.")
    robot.moveMouse(1138, 1222)
    robot.mouseClick()
    sleep(5000)

    console.log("Going to net.")
    robot.moveMouse(778, 805)
    robot.mouseClick()
    sleep(3500)

    console.log("Crossing wall.")
    robot.moveMouse(1021, 573)
    sleep(100)
    robot.mouseClick()
    sleep(5000)

    console.log("Going down ladder.")
    robot.moveMouse(1260, 1003)
    sleep(100)
    robot.mouseClick()
    sleep(2500)

    console.log("Going to next spot.")
    robot.moveMouse(2490, 106)
    robot.mouseClick()
    sleep(3000)


    console.log("Crumbling wall 1.")
    robot.moveMouse(1360, 598)
    robot.mouseClick()
    sleep(3000)

    console.log("Crumbling wall 2.")
    robot.moveMouse(1684, 724)
    robot.mouseClick()
    sleep(3000)

    console.log("Crumbling wall 3.")
    robot.moveMouse(1683, 713)
    robot.mouseClick()
    sleep(2000)

    console.log("Completed lap.")
    robot.moveMouse(2507, 130)
    robot.mouseClick()
    sleep(2000)

}

bank()
bank()
bank()
bank()
bank()
bank()
bank()
bank()
bank()
bank()
bank()
bank()
bank()
bank()



// utility functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
