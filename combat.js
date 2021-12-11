let robot = require('robotjs') //

function main() {
    console.log("Starting Up...")
    sleep(4000)

    // a bad bad infinate loop
    while (true) {   
        let tree = findTree()
        // if no tree can be found, don't execute
        if (tree == false) {
            rotateCamera()
            continue
        }

        //chop down tree found in image screenshot function
        robot.moveMouse(tree.x, tree.y)
        robot.mouseClick()
        sleep(17000)
    }
}

//function findCrab() {
//    let x = 300, y = 300, width = 1300, height = 400
//    let img = robot.screen.capture(x, y, width, height) //1440p screen
//
//    //array for tree color hex values
//    let crab_colors = ["676652", "515040", "62614D", "5E604C"]
//
//    for (var i = 0; i < 500; i ++ ) { // iterator loop > less than 100 > increase i by 1
//        let random_x = getRandomInt(0, width - 1) // random int between 0-199
//        let random_y = getRandomInt(0, height - 1) // random int between 0-199
//        let sample_color = img.colorAt(random_x, random_y)
//
//        if (crab_colors.includes(sample_color)) {
//            let screen_x = random_x + x
//            let screen_y = random_y + y
//            
//            if (confirmCrab(screen_x, screen_y)) {
//                console.log("Found a crab at: " + screen_x + ", " + screen_y + ", " + " color #" + sample_color)
//                return {x: screen_x, y: screen_y}
//            } else {
//                console.log("Unconfirmed crab at: " + screen_x + ", " + screen_y + ", " + " color #" + sample_color)
//            }
//        }
//    }
//    // did not find the color in our screenshot
//    return false
//}

function findTree() {
    // take a screenshot from just the middle of our screen.
    // I have the upper left corner of the image starting at x = 300, y = 300, and size of
    // the image at width = 1300, height = 400.
    // you should adjust this to your own screen size. you might also try reducing the size
    // if this is running slow for you.
    var x = 300, y = 300, width = 1300, height = 400;
    var img = robot.screen.capture(x, y, width, height);

    // make an array that contains colors of the trees we want to click on.
    // I'm targeting the brown colors of the trunks.
    var tree_colors = ["676652", "515040", "62614D", "5E604C"];

    // sample up to 500 random pixels inside our screenshot until we find one that matches
    // a tree color.
    for (var i = 0; i < 750; i++) {
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (tree_colors.includes(sample_color)) {
            // because we took a cropped screenshot, and we want to return the pixel position
            // on the entire screen, we can account for that by adding the relative crop x and y
            // to the pixel position found in the screenshot;
            var screen_x = random_x + x;
            var screen_y = random_y + y;
            
            console.log("Found a crab at: " + screen_x + ", " + screen_y + " color " + sample_color);
            console.log("Attacking...")
            return {x: screen_x, y: screen_y};
            
        }
    }
}    

function confirmCrab(screen_x, screen_y) {
    //move mouse to given coordinates
    robot.moveMouse(screen_x, screen_y)
    //wait for help text to appear
    sleep(300)
    // now check color of action text (this is where it breaks)
    let check_x = 167
    let check_y = 62
    let pixel_color = robot.getPixelColor(check_x, check_y)

    return pixel_color == "00FF00"
}

// utility 
function rotateCamera() {
    console.log("Rotating Camera")

    robot.keyToggle("right", "down")
    sleep(1000)
    robot.keyToggle("right", "up")
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// utility
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main()