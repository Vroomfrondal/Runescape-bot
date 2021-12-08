// import the robotjs library
let robot = require('robotjs') //

function main() {
    console.log("Starting Up...")
    sleep(4000)

    let first_tree_x = 840
    let first_tree_y = 653
    let second_tree_x = 1714
    let second_tree_y = 844

    // a bad bad infinate loop
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
    robot.moveMouse(inventory_location_x, inventory_location_y + 69) // relative-motion
    robot.mouseClick()
    sleep(1000)
}

function testScreenCapture() {
    // taking screenshot
    let img = robot.screen.capture(0, 0, 2560, 1440) //1440p screen
    
    let pixel_color = img.colorAt(899, 322)
    console.log(pixel_color)
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

//main()