// import the robotjs library
let robot = require('robotjs') //

function main() {

    // Sleep function to start script
    console.log("Starting the magic...")
    sleep(4000)
    
    // Move mouse + click to location of tree
    robot.moveMouse(1090, 696)
    robot.mouseClick()

    console.log("Done.")

}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

 main()