// import the robotjs library
let robot = require('robotjs') //

console.log("Starting...")
sleep(3000)

function buyFeathers() {
    let feather_buy_location_x = 1321
    let feather_buy_location_y = 629
    
    for (let i = 0; i < 15; i++) {
        // move mouse to feather location in store
        robot.moveMouse(feather_buy_location_x, feather_buy_location_y)
        robot.mouseClick('right')
        sleep(150)

        // relative motion to drop mouse 93 pixels to the "buy x" menu-option
        robot.moveMouse(feather_buy_location_x, feather_buy_location_y + 93)
        robot.mouseClick()
        sleep(1000)

        // how many feathers should we buy?
        robot.typeString(10000)
        robot.keyTap('enter')
        sleep(100)
        
        console.log("Bought 10,000 feathers.")
    }
}

buyFeathers()


// Utility Functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }