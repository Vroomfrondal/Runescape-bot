// import the robotjs library
let robot = require('robotjs') //

function main() {
    console.log("Starting Up...")
    sleep(4000)

    let first_tree_x = 954
    let first_tree_y = 596
    let second_tree_x = 1612
    let second_tree_y = 535

    while (true) {   
        //chop down first tree
        robot.moveMouse(first_tree_x, first_tree_y)
        robot.mouseClick()
        sleep(4000)

        dropLogs()

        //chop down second tree
        robot.moveMouse(second_tree_x, second_tree_y)
        robot.mouseClick()
        sleep(4000)

        dropLogs()
    }
}

function dropLogs() {
    let inventory_location_x = 2393
    let inventory_location_y = 1126

    //drop inventory
    robot.moveMouse(inventory_location_x, inventory_location_y)
    robot.mouseClick('right')
    sleep(200)
    robot.moveMouse(inventory_location_x, inventory_location_y + 69) // relative-motion
    robot.mouseClick()
    sleep(1000)
}




function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

 main()