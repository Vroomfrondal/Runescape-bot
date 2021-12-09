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
            rotateCamera()
            continue
        }

        //chop down tree found in image screenshot function
        robot.moveMouse(tree.x, tree.y)
        robot.mouseClick()
        sleep(3000)
        dropLogs()
    }
}

function findTree() {
    let x = 300, y = 300, width = 1300, height = 400
    let img = robot.screen.capture(x, y, width, height) //1440p screen

    //array for tree color hex values
    let tree_colors = ["735835", "765B37", "664E2E", "7A5D39", "5B462A", "705634", "80623A", "475428"]

    for (var i = 0; i < 1000; i ++ ) { // iterator loop > less than 100 > increase i by 1
        let random_x = getRandomInt(0, width - 1) // random int between 0-199
        let random_y = getRandomInt(0, height - 1) // random int between 0-199
        let sample_color = img.colorAt(random_x, random_y)

        if (tree_colors.includes(sample_color)) {
            let screen_x = random_x + x
            let screen_y = random_y + y
            
            console.log("Found a tree at: " + screen_x + ", " + screen_y + ", " + " color #" + sample_color)
            return {x: screen_x, y: screen_y}
        }
    }
    // did not find the color in our screenshot
    return false
}

function rotateCamera() {
    console.log("Rotating Camera")

    robot.keyToggle("right", "down")
    sleep(1000)
    robot.keyToggle("right", "up")
}


function dropLogs() {
    let inventory_location_x = 2393
    let inventory_location_y = 1126
    let inventory_log_color = "765b37"

    let pixel_color = robot.getPixelColor(inventory_location_x, inventory_location_y);

    //console.log("Inventory log color is: " + pixel_color)

    if (pixel_color == inventory_log_color) {
        robot.moveMouse(inventory_location_x, inventory_location_y)
        robot.mouseClick('right')
        sleep(300)
        robot.moveMouse(inventory_location_x, inventory_location_y + 69) // relative-motion
        robot.mouseClick()
        console.log("Dropped logs")
        sleep(1000)
    }
    //drop inventory
    
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