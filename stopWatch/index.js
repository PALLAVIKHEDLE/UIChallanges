window.onload=function(){
    let seconds=0,tens=0, Interval
    let appendSeconds=document.getElementById('seconds')
    let appendTens=document.getElementById('tens')
    let buttonReset=document.getElementById('buttonReset')
    let buttonStart=document.getElementById('buttonStart')
    let buttonStop=document.getElementById('buttonStop')

    buttonStart.onclick=function(){
        clearInterval(Interval)
        Interval=setInterval(startTimer,20)
    }

    buttonStop.onclick=function(){
        clearInterval(Interval)
    }
    buttonReset.onclick=function(){
        clearInterval(Interval)
        tens=0
        seconds=0
        appendTens.innerHTML=tens
        appendSeconds.innerHTML=seconds
    }

    function startTimer(){
        tens++
        if(tens<=9)appendTens.innerHTML="0"+tens
        if(tens>9)appendTens.innerHTML=tens
        if(tens>99){
            seconds++
            appendSeconds.innerHTML="0"+seconds
            tens=0
            appendTens.innerHTML="0"+0
        }
        if(seconds>9)appendSeconds.innerHTML=seconds
    }
}