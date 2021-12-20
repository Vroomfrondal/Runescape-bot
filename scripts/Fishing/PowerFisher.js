// Script Purpose:
// Power Fishes salmon & trout in shilo village at the western most spot.
// Instructions: 
// Fullscreen mode, zoom all the way in in-game. "node PowerFisher.js" in console to run.

// import the robotjs library
let robot = require('robotjs') 

console.log("Starting up...")
console.log("--------------")
sleep(2000)

function main() {
    resetCamera()

    for (let i = 0; i < 500; i++) {
        dropInventory()
        sleep(300) // bug fix?
        fish()
        sleep(20000)
    }
}

function resetCamera() {
    sleep(1000)
    const compass_position_x = 2415
    const compass_position_y = 75

    //reset compass position
    console.log("Resetting Compass in game.")
    robot.moveMouse(compass_position_x, compass_position_y)
    sleep(200)
    robot.mouseClick()

    //reset camera position 
    console.log("Resetting Camera in game.")
    robot.keyToggle("up", "down")
    sleep(2000)
    robot.keyToggle("up", "up")

    //zoom all the way in
    console.log("Zooming in.")
    setTimeout(function() {
        robot.scrollMouse(500, 0)
    }, 2000)
}

function fish() {
    let starting_x = 1264
    let starting_y = 625

    console.log("Fishing...")
    //loop to start fishing
    for(let i = 0; i < 5; i++) {
        sleep(400) // furnance misclick bug fix
        robot.moveMouse(starting_x, starting_y)
        sleep(300)
        robot.mouseClick()
        sleep(10000)

        robot.moveMouse(starting_x + 50, starting_y + 50)
    }
}

function dropInventory() {
    let starting_x = 2388
    let starting_y = 1119

    console.log("Starting to drop inventory...")
    
    //loop to drop columns of inventory
    for (let i = 0; i < 6; i++) {
        let y = starting_y + i * 35
        
        //loop to drop rows of inventory for each column-loop
        for (let j = 0; j < 4; j++) {
            let x = starting_x + j * 40
            
            //right-click inventory to open menu, and select "drop" action
            robot.moveMouse(x, y)
            robot.mouseClick('right')
            sleep(65)
            robot.moveMouse(x, y + 38)
            sleep(100)
            robot.mouseClick()
        }
    }
    console.log("Inventory dropped.")
    console.log("------------------")
}

main()




// utility functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
