let start = document.getElementById("start");
let stoptimer = document.getElementById("stop");
let reset = document.getElementById("reset");
let displayTimer = document.getElementById("displayTimer");
let split = document.getElementById("split");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function startTimer(){
       milliseconds+=10;

       if(milliseconds === 1000){
        milliseconds = 0;
        seconds++;
       }
       if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
       }
       let milli = milliseconds/10;
           milli = milli < 10 ? "0"+milli : milli;
      let sec = seconds < 10 ? "0"+seconds:seconds;
      let min = minutes < 10 ? "0"+minutes:minutes;
      let  h = hours < 10 ? "0"+hours:hours;

displayTimer.innerHTML = h+ ":" + min +":"+sec+"." + milli;
split.innerHTML = h+ ":" + min +":"+sec+"." + milli; 
}


function stopTimer(){
        clearInterval(timer);
        start.classList.remove("colorChange");
        stoptimer.classList = "colorChange";
}

function resetTimer(){
     clearInterval(timer);
     displayTimer.innerHTML = "00:00:00";
     seconds = 0;
     minutes = 0;
     milliseconds = 0;
     hours = 0;  
   stoptimer.classList = "colorChange";
}

function updateTimer(){
if(timer !== null) clearInterval(timer);
 timer =  setInterval(startTimer , 10);
     console.log(timer);
     start.classList = "colorChange"
     stoptimer.classList.remove("colorChange");
}

start.addEventListener('click',  updateTimer);
stoptimer.addEventListener('click' , stopTimer);
reset.addEventListener('click' , resetTimer);

