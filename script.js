const minutesLabel= document.getElementById('minutes');
const secondsLabel= document.getElementById('seconds');
const millisecondsLabel= document.getElementById('milliseconds');

const startButton= document.getElementById('Start button');
const stopButton= document.getElementById('Stop button');
const PauseButton= document.getElementById('Pause button');
const resetButton=document.getElementById('Reset button');
const resetLapButton=document.getElementById('Reset LapTimer');

const laplist=document.getElementById('lap-list');

let minutes=0;
let seconds=0;
let milliseconds=0;
let interval;

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click', stopTimer);
PauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
resetLapButton.addEventListener('click',resetlapTimer);

function startTimer()
{
  interval = setInterval(updateTimer,-20);
  startButton.disabled=true;
  stopButton.disabled=false;
  PauseButton.disabled=false;
  resetButton.disabled=false;
}
function stopTimer()
{
     clearInterval(interval);
     addToLapList();
     resetTimerData();
     startButton.disabled=false;
     stopButton.disabled=true;
     PauseButton.disabled=true;
     resetButton.disabled=true;
     resetLapButton.disabled=false;

}
function pauseTimer()
{
    clearInterval(interval);
    PauseButton.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = false;
    stopButton.disabled = false;
   
}
function resetTimer()
{
    clearInterval(interval);
    resetTimerData();
    resetButton.disabled = true;
    startButton.disabled = false;
    stopButton.disabled=true;
    resetLapButton.disabled=true;
    PauseButton.disabled=true;
}
function resetlapTimer()
{    
    clearInterval(addToLapList());
    resetLapButton.disabled=true;

}
function updateTimer()
{
    milliseconds++;
    if(milliseconds === 100)
    {
        milliseconds=0;
        seconds++;
    if(seconds === 60)
    {
        seconds=0;
        minutes++;
        
    }
    }
    displayTimer();
}
function displayTimer()
{
    millisecondsLabel.textContent=padTime(milliseconds);
    secondsLabel.textContent=padTime(seconds);
    minutesLabel.textContent=padTime(minutes);
}
function padTime(time)
{
    return time.toString().padStart(2, '0');
}
function resetTimerData()
{
    minutes=0;
    seconds=0;
    milliseconds=0;
    displayTimer();
}
function addToLapList()
{
const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;

const listItem =document.createElement('li');
listItem.innerHTML=`<span>Lap ${laplist.childElementCount + 1 }: </span>${lapTime}`;
laplist.appendChild(listItem);
}