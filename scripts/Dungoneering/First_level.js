// Script Purpose:
// Automatically trains dungeoneering from levels 1-50
// Face compass North, Camera all the way up and zoomed in. Start with dung teleport in skilltab.


// import the robotjs library
let robot = require('robotjs') //

console.log("Starting up dungeon script...")
console.log("-----------------------------")
sleep(3000)

function main() {
    for (let i = 0; i < 5; i ++) {
        startDungeon()
        dungoneering()
        console.log("Dungeons run: " + (i + 1))
    }
}

function dungoneering() {
    sleep(4000) //debug use

    console.log("Running to door.")
    robot.moveMouse(2477, 103)
    sleep(300)
    robot.mouseClick()
    sleep(4000)

    console.log("Clicking door.")
    robot.moveMouse(1297, 482)
    sleep(300)
    robot.mouseClick()
    sleep(2000)

    console.log("Running north path...")
    robot.moveMouse(2407, 128)
    sleep(300)
    robot.mouseClick()
    sleep(16000)

    console.log("Running north path...")
    robot.moveMouse(2405, 130)
    sleep(300)
    robot.mouseClick()
    sleep(5000)

    console.log("Running south...")
    robot.moveMouse(2447, 201)
    sleep(300)
    robot.mouseClick()
    sleep(16000)

    console.log("Continuing to run south...")
    robot.moveMouse(2493, 203)
    sleep(300)
    robot.mouseClick()
    sleep(19000)

    console.log("Last leg of trip...")
    robot.moveMouse(2529, 170)
    sleep(300)
    robot.mouseClick()
    sleep(9000)

    console.log("Equiping Weapon.")
    robot.moveMouse(2394, 1156)
    sleep(300)
    robot.mouseClick()
    sleep(500)

    console.log("Turn on Prayer.")
    robot.moveMouse(2367, 142)
    sleep(300)
    robot.mouseClick()
    sleep(500)

    console.log("Enter Portal")
    robot.moveMouse(1229, 469)
    sleep(300)
    robot.mouseClick()
    sleep(2000)

    console.log("Run to boss.")
    robot.moveMouse(2483, 159)
    sleep(300)
    robot.mouseClick()
    sleep(3200)

    console.log("attack boss")
    robot.moveMouse(1249, 672)
    sleep(300)
    robot.mouseClick()
    sleep(20000)
}

function startDungeon() {
    let dung_master_x = 1463
    let dung_master_y = 520

    console.log("Running to dungeon.")
    robot.moveMouse(2480, 90)
    sleep(300)
    robot.mouseClick()
    sleep(5000)

    console.log("Clicking Master of Dungeoneering.")
    robot.moveMouse(dung_master_x, dung_master_y)
    sleep(300)
    robot.mouseClick('right')
    sleep(500)
    robot.moveMouse(dung_master_x, dung_master_y + 56)
    sleep(300)
    robot.mouseClick()
    sleep(1000)

    console.log("Choosing Floor")
    robot.moveMouse(269, 1289)
    sleep(300)
    robot.mouseClick()

}

main()



// utility functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
