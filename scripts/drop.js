// import the robotjs library
let robot = require('robotjs') //

console.log("Starting up...")
sleep(2000)

function dropInventory() {
    //let first_inventory_location_x = 2393
    //let first_inventory_location_y = 1114

    // drop first item
    //robot.moveMouse(first_inventory_location_x, first_inventory_location_y)
    //robot.mouseClick('right')
    //robot.moveMouse(first_inventory_location_x, first_inventory_location_y + 39) //relative motion
    //robot.mouseClick()

    let starting_x = 2393
    let starting_y = 1114

    for (let i = 0; i < 7; i++) {
        let y = starting_y + i * 41
        
        for (let j = 0; j < 4; j++) {
            let x = starting_x + j * 40
            
            robot.moveMouse(x, y)
            robot.mouseClick('right')
            sleep(100)
            robot.moveMouse(x, y + 38)
            robot.mouseClick()
            sleep(300)
        }
    }
}

dropInventory()

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
