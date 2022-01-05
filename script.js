// Define vars to hold time values and status

let seconds, minutes, hours, status, interval;

function init() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
}

// Stopwatch function (logic to determine when to increment next value, etc.)

function stopWatch() {

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 ===1){
            minutes = 0;
            hours++;
        }
    }

    //If seconds/minutes/hours are only one digit, ad a leading 0 to the value

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }

    //Display update time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInteral() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }
    else {

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

// Operation            State
// initialization       status="stopped"
// start                status="started"
// stop                 status="stopped"
// start                status="started"
// reset                status="started"
// start                status="stopped"
// start                status="started"

// Function to reset the stopwatch
function reset(){
    init();
}