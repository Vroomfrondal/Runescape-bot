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
        bank()
        fish()
        sleep(20000)
    }
}

function fish() {
    let starting_x = 1264
    let starting_y = 625

    console.log("Fishing...")
    //loop to start fishing
    for(let i = 0; i < 3; i++) {
        sleep(400) // furnance misclick bug fix
        robot.moveMouse(starting_x, starting_y)
        robot.mouseClick()
        sleep(25000)

        robot.moveMouseSmooth(starting_x + 20, starting_y + 20)
    }
}

function bank() {
    sleep(4000) //debug use

    //move character to banking location
    console.log("Running to the nearest bank...")
    robot.moveMouse(2436, 182)
    robot.mouseClick()
    sleep(6000)

    console.log("Opening Bank.")
    robot.moveMouse(1258, 808)
    robot.mouseClick('right')
    sleep(300)
    robot.moveMouse(1258, 808 + 20)
    robot.mouseClick()

    console.log("Depositing Items.")
    robot.moveMouse(1416, 1202)
    sleep(1000) // wait for bank interface to open
    robot.mouseClick()
    sleep(1000)

    console.log("Running to fish monkfish")
    robot.moveMouse(2508, 84)
    robot.mouseClick()
    sleep(5000)

    return fish()
}

main()




// utility functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
