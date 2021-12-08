// import the robotjs library
let robot = require('robotjs') //

function main() {

    console.log("Starting...")
    // start at 0
    let number_of_loops = 0;

    while (true) {
        //Sleep function to delay start of program
        sleep(4000)
        
        //Move mouse + click
        robot.moveMouse(1127, 662)
        robot.mouseClick()
        sleep(3000)
        number_of_loops += 1
    }
}




function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

 main()