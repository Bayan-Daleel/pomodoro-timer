const startElm=document.getElementById("start");
const stopElm=document.getElementById("stop");
const resetElm=document.getElementById("reset");
const timerElm=document.getElementById("timer");



let interval;
let timeLeft=1500;

updateTime(); 
function updateTime(){
 let minutes = Math.floor(timeLeft / 60);
 let seconds = Math.floor(timeLeft % 60);
 timerElm.innerText = `${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`
}

function startTimer()
{
     interval =setInterval (()=>{
        timeLeft--;
        updateTime(); 
        if(timeLeft===0){
            clearInterval(interval);
            timeLeft=1500;
            updateTime();
            alert("Times up!")
        }
    },1000)

}
function stoptTimer()
{
clearInterval(interval)
}

function resetTimer()
{
    clearInterval(interval);
    timeLeft=1500;
    updateTime(); 

}

startElm.addEventListener("click",startTimer);
stopElm.addEventListener("click",stoptTimer);
resetElm.addEventListener("click",resetTimer);