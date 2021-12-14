// Script Purpose:
// Power Fishes salmon & trout in shilo village at the western most spot

// import the robotjs library
let robot = require('robotjs') //

console.log("*Starting up*")
sleep(2000)

function main() {
    for (let i = 0; i < 10; i++) {
        dropInventory()
        fish()
        sleep(30000)
    }
}

function fish() {
    let starting_x = 1254
    let starting_y = 613

    console.log("Fishing...")
    //loop to start fishing
    for(let i = 0; i < 5; i++) {
        robot.moveMouse(starting_x, starting_y)
        robot.mouseClick()
        sleep(7000)

        robot.moveMouseSmooth(starting_x + 20, starting_y + 20)
    }
}

function dropInventory() {
    let starting_x = 2393
    let starting_y = 1122

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
            sleep(40)
            robot.moveMouse(x, y + 38)
            robot.mouseClick()
        }
    }
    console.log("Inventory dropped.")
}

main()
//dropInventory()


// utility functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
