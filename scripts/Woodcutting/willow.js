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
        sleep(12000)
    }
}

/* function dropLogs() {
    let inventory_location_x = 2393
    let inventory_location_y = 1126
    let inventory_log_color = "765b37"
    let inventory_log_color_oak = "967445"
    let inventory_log_color_willow = "574E20"

    let pixel_color = robot.getPixelColor(inventory_location_x, inventory_location_y);

    let wait_cycles = 0 
    let max_wait_cycles = 9
    while (pixel_color != inventory_log_color && wait_cycles < max_wait_cycles) {
        sleep(1000)
        robot.getPixelColor(inventory_location_x, inventory_location_y);
        wait_cycles ++
    }
    console.log("Inventory log color is: " + pixel_color)

    if (pixel_color == inventory_log_color || inventory_log_color_oak || inventory_log_color_willow) {
        robot.moveMouse(inventory_location_x, inventory_location_y)
        robot.mouseClick('right')
        sleep(300)
        robot.moveMouse(inventory_location_x, inventory_location_y + 69) // relative-motion
        robot.mouseClick()
        console.log("Dropped logs")
        sleep(1000)
    }
    //drop inventory
    
}*/


function bank() {
    sleep(4000) //debug use
    let bank_minimap_location_x = 2496
    let bank_minimap_location_y = 155
    let bank_window_color = "867771"
    let x = 300, y = 300, width = 1300, height = 400
    let img = robot.screen.capture(x, y, width, height) //1440p screen
    

    //run to the bank and wait
    console.log("Running to the bank...")
    robot.moveMouse(bank_minimap_location_x, bank_minimap_location_y)
    robot.mouseClick()
    sleep(7000)

    //take screenshot and click on bank
    for (var i = 0; i < 25; i++ ) { // iterator loop > less than 100 > increase i by 1
        let random_x = getRandomInt(0, width - 1) // random int between 0-199
        let random_y = getRandomInt(0, height - 1) // random int between 0-199
        let sample_color = bank_window_color

        if (bank_window_color.includes(sample_color)) {
            let screen_x = random_x + x
            let screen_y = random_y + y
            
            if (confirmBank(screen_x, screen_y)) {
                console.log("Found a bank at: " + screen_x + ", " + screen_y + ", " + " color #" + sample_color)
                robot.mouseClick()
                console.log("Banking...")
            } else {
                console.log("Could not find a bank at: " + screen_x + ", " + screen_y + ", " + " color #" + sample_color)
                return {x: screen_x, y: screen_y}
            }
        }
    }
    return false
}

function findBank() {
    sleep(4000) //debug use
    let x = 700, y = 700, width = 2560, height = 1440
    let img = robot.screen.capture(0, 0, width, height) //1440p screen
    let bank_symbol_color = "e9d14c"
    
    //take screenshot and click on bank
    for (let i = 0; i < 5; i++) {
        let random_x = getRandomInt(0, width - 1) // random int between 0-199
        let random_y = getRandomInt(0, height - 1) // random int between 0-199
        let sample_color = img.colorAt(random_x, random_y)

        if (confirmBankSymbol(screen_x, screen_y)) {
            console.log("Found a banking area: " + screen_x + ", " + screen_y + ", " + " color #" + sample_color)
            return {x: screen_x, y: screen_y}
        } else {
            console.log("Unconfirmed bank at: " + screen_x + ", " + screen_y + ", " + " color #" + sample_color)
        }
    }
}

function confirmBank (screen_x, screen_y) {
    //move mouse to given coordinates
    robot.moveMouse(screen_x, screen_y)
    //wait for help text to appear
    sleep(300)
    // now check color of action text
    let check_x = 60
    let check_y = 63
    let pixel_color = robot.getPixelColor(check_x, check_y)

    return pixel_color == ["00ffff"]
}

function confirmBankSymbol (screen_x, screen_y) {
    //move mouse to given coordinates
    robot.moveMouse(screen_x, screen_y)
    //wait for help text to appear
    sleep(300)
    // now check color of action text
    let check_x = 60
    let check_y = 63
    let pixel_color = robot.getPixelColor(check_x, check_y)

    return pixel_color == ["00ffff"]
}

function findTree() {
    let x = 300, y = 300, width = 1300, height = 400
    let img = robot.screen.capture(x, y, width, height) //1440p screen

    //array for tree color hex values
    let tree_colors = ["6A5630", "645c39", "575030", "d7d7b6"]

    for (var i = 0; i < 500; i ++ ) { // iterator loop > less than 100 > increase i by 1
        let random_x = getRandomInt(0, width - 1) // random int between 0-199
        let random_y = getRandomInt(0, height - 1) // random int between 0-199
        let sample_color = img.colorAt(random_x, random_y)

        if (tree_colors.includes(sample_color)) {
            let screen_x = random_x + x
            let screen_y = random_y + y
            
            if (confirmTree(screen_x, screen_y)) {
                console.log("Found a tree at: " + screen_x + ", " + screen_y + ", " + " color #" + sample_color)
                return {x: screen_x, y: screen_y}
            } else {
                console.log("Unconfirmed tree at: " + screen_x + ", " + screen_y + ", " + " color #" + sample_color)
            }
        }
    }
    // did not find the color in our screenshot
    return false
}

function confirmTree(screen_x, screen_y) {
    //move mouse to given coordinates
    robot.moveMouse(screen_x, screen_y)
    //wait for help text to appear
    sleep(300)
    // now check color of action text
    let check_x = 96
    let check_y = 63
    let pixel_color = robot.getPixelColor(check_x, check_y)

    return pixel_color == "00ffff"
}




// Utility Functions Below: 

function rotateCamera() {
    console.log("Rotating Camera")

    robot.keyToggle("right", "down")
    sleep(1000)
    robot.keyToggle("right", "up")
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
//bank()
//findBank()