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
        console.log("-------------------------")
    }
}

function dungoneering() {
    sleep(3000) //debug use

    console.log("Running North.")
    robot.moveMouse(2464, 60)
    sleep(300)
    robot.mouseClick()
    sleep(7000)

    console.log("Running to room with mud.")
    robot.moveMouse(2476, 59)
    sleep(300)
    robot.mouseClick()
    sleep(11000)

    console.log("grabbing mud wall")
    robot.moveMouse(2036, 220)
    sleep(300)
    robot.mouseClick()
    sleep(4000)

    console.log("Running west path...")
    robot.moveMouse(2406, 121)
    sleep(300)
    robot.mouseClick()
    sleep(7000)

    robot.moveMouse(2406, 133)
    sleep(300)
    robot.mouseClick()
    sleep(7000)

    robot.moveMouse(2411, 108)
    sleep(300)
    robot.mouseClick()
    sleep(7000)

    console.log("Grabbing orb from crate.")
    robot.moveMouse(37, 548)
    sleep(300)
    robot.mouseClick()
    sleep(4000)

    console.log("Equiping Weapon.")
    robot.moveMouse(2394, 1156)
    sleep(300)
    robot.mouseClick()
    sleep(500)

    console.log("Equipping Gear.")
    robot.moveMouse(2399, 1115)
    sleep(300)
    robot.mouseClick()
    sleep(300)
    robot.moveMouse(2435, 1119)
    sleep(300)
    robot.mouseClick()
    sleep(300)
    robot.moveMouse(2479, 1114)
    sleep(300)
    robot.mouseClick()
    robot.moveMouse(2395, 1160)
    sleep(300)
    robot.mouseClick()


    console.log("Turning on Prayer.")
    robot.moveMouse(2367, 142)
    sleep(300)
    robot.mouseClick()
    sleep(500)

    console.log("Touch booklet.")
    robot.moveMouse(1261, 390)
    sleep(300)
    robot.mouseClick()
    sleep(1600)

    console.log("Attack")
    robot.moveMouse(1935, 463)
    sleep(300)
    robot.mouseClick()
    sleep(45000)
}

function startDungeon() {
    let dung_master_location_x = 1460
    let dung_master_location_y = 547
    let floor_number = "Floor 2"

    console.log("Running to dungeon...")
    robot.moveMouse(2480, 90)
    sleep(300)
    robot.mouseClick()
    sleep(5000)

    console.log("Talking to the Master of Dungeoneering...")
    robot.moveMouse(dung_master_location_x, dung_master_location_y)
    sleep(300)
    robot.mouseClick('right')
    sleep(500)
    robot.moveMouse(dung_master_location_x, dung_master_location_y + 56)
    sleep(300)
    robot.mouseClick()
    sleep(1000)

    console.log("Choosing Floor: " + floor_number)
    robot.moveMouse(262, 1310)
    sleep(300)
    robot.mouseClick()

}

main()








// utility functions
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
