// import the robotjs library
let robot = require('robotjs') //

console.log("Starting...")
sleep(3000)


function buyFeathers() {
    let feather_buy_location_x = 1321
    let feather_buy_location_y = 629

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
    
    console.log("Bought 10,000 feathers.")
}
buyFeathers()

//for (let step = 0; step < 5; step++) {
//    // Runs 5 times, with values of step 0 through 4.
//    console.log('Walking east one step');
//  }



// Utility Functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }