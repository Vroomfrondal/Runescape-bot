// import the robotjs library
let robot = require('robotjs') //

function main() {
    console.log("Starting...")
    sleep(4000)

    let first_tree_x = 934
    let first_tree_y = 742
    let second_tree_x = 1544
    let second_tree_y = 685
    let inventory_location_x = 2393
    let inventory_location_y = 1126

    while (true) {   
        //chop down first tree
        robot.moveMouse(first_tree_x, first_tree_y)
        robot.mouseClick()
        sleep(4000)

        //drop inventory
        robot.moveMouse(inventory_location_x, inventory_location_y)
        robot.mouseClick('right')
        robot.moveMouse(inventory_location_x, inventory_location_y + 69)
        robot.mouseClick()

        //chop down second tree
        robot.moveMouse(second_tree_x, second_tree_y)
        robot.mouseClick()
        sleep(4000)
    }
}




function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

 main()