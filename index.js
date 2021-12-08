// import the robotjs library
let robot = require('robotjs') //

function main() {
    console.log("Starting Up...")
    sleep(4000)

    // a bad bad infinate loop
    while (true) {   
        let tree = findTree()
        // if no tree can be found, don't execute
        if (tree == false) {
            console.log("No Tree in sight.")
            break
        }

        //chop down tree found in image screenshot function
        robot.moveMouse(tree.x, tree.y)
        robot.mouseClick()
        sleep(4000)
        dropLogs()
    }
}

function findTree() {
    let x = 300, y = 300, width = 1300, height = 400
    let img = robot.screen.capture(x, y, width, height) //1440p screen

    //array for tree color hex values
    let tree_colors = ["735835", "765B37", "664E2E", "7A5D39", "5B462A", "705634", "80623A"]

    for (var i = 0; i < 100; i ++ ) { // iterator loop > less than 100 > increase i by 1
        let random_x =
        let random_y = 
        let sample_color = img.colorAt(random_x, random_y)

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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

main()