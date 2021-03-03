



var doorImage1 = document.getElementById('door_a');
var doorImage2 = document.getElementById('door_b');
var doorImage3 = document.getElementById('door_c');


var flyDoorPath = "findfly.png";
var oceanDoorPath = "ocean.png";
var forestDoorPath = "forest.png";

let numClosedDoors = 3;

let closedDoorPath = "door_closed.png"

let startButton =document.getElementById('start');
let currentPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;



const randomFindDoorGenerator = () => {
    let findDoor = Math.floor(Math.random()*numClosedDoors);
    if(findDoor === 0){
        openDoor1 = flyDoorPath;
        openDoor2 = forestDoorPath;
        openDoor3 = oceanDoorPath;
    } else if(findDoor === 1) {
        openDoor1 = oceanDoorPath;
        openDoor2 = flyDoorPath;
        openDoor3 = forestDoorPath;
    } else {
        openDoor1 = forestDoorPath;
        openDoor2 = oceanDoorPath;
        openDoor3 = flyDoorPath;
    }
}

doorImage1.onclick = () => {
    
    if(currentPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if(currentPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if(currentPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
    }
    
}


startButton.onclick = () => {
    if(!currentPlaying) {
        startRound();
    }
    //startRound()
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = "Good Luck!"
    currentPlaying = true;
    randomFindDoorGenerator()
}

const gameOver = (status) => {
    
    if(status === "win"){
        startButton.innerHTML = "You win! Play Again?" 
    } else {
        startButton.innerHTML = "Game Over! Try Again?"
    }
    return currentPlaying = false;
}

const isFly = (door) => {

    if(door.src.includes(flyDoorPath)) {
        return true;
    } else {
        return false;
    }
}

const isClicked = (door) => {

    if(door.src.includes(closedDoorPath)){
        return false
    } else {
        return true
    }
}

const playDoor = (door) => {
    numClosedDoors --;

    if(numClosedDoors === 0) {
        gameOver("win")
    } else if( isFly(door)) {
        gameOver("lose")
    }
}





startRound()











