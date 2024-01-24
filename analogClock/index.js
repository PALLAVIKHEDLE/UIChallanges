(function (){
    let dialLines= document.getElementsByClassName('diallines')
    let clockEl=document.getElementsByClassName('clock')[0];

    for(let i=1; i<60;i++){
        clockEl.innerHTML+="<div class='diallines'></div>"//each minute marl one dialline(means append new div)
        dialLines[i].style.transform="rotate(" +6*i+"deg)"//rotate each dial line by an angle
    }

    function clock(){
        //array of weekdays
        var weekday=[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        //Get current Date and time
        let d=new Date(),
            h=d.getHours(),
            m=d.getMinutes(),
            s=d.getSeconds(),
            date=d.getDate(),
            month=d.getMonth()+1,
            year=d.getFullYear();

        // select clock hand and date/day elements
        let hourHand=document.querySelector(".hour"),
            minuteHand=document.querySelector(".minute"),
            secondHand=document.querySelector(".second"),
            dayEl=document.querySelector('.day'),
            dateEl=document.querySelector('.date');

        let day = weekday[d.getDay()];//get the current day of the week
  
        if(month < 9)month = "0" + month;
            
/*
There are 12 hours on a clock, and each hour corresponds to 360 degrees (360 degrees divided by 12 hours = 30 degrees per hour).
(360/720) is added to account for the minute hand's contribution. 
Since there are 60 minutes in an hour, the minute hand moves half a degree for each minute
(360 degrees divided by 60 minutes = 6 degrees per minute). Hence, (360/720) is used to get half a degree for each minute.
There are 60 minutes on a clock, and each minute corresponds to 360 degrees (360 degrees divided by 60 minutes = 6 degrees per minute).
s * (360/3600) is added to account for the second hand's contribution. Since there are 60 seconds in a minute, 
the second hand moves 6 degrees for each second (360 degrees divided by 60 seconds = 6 degrees per second).
Hence, (360/3600) is used to get 6 degrees for each second.

There are 60 seconds on a clock, and each second corresponds to 360 degrees (360 degrees divided by 60 seconds = 6 degrees per second).

 */
        let hDeg = h * 30 + m * (360/720),
            mDeg = m * 6 + s * (360/3600),
            sDeg = s * 6;

    // Apply rotation transformations to clock hands
            hourHand.style.transform = "rotate("+hDeg+"deg)";
            minuteHand.style.transform = "rotate("+mDeg+"deg)";
            secondHand.style.transform = "rotate("+sDeg+"deg)";
            dateEl.innerHTML = month+"/"+date+"/"+year;
            dayEl.innerHTML = day;

    }
    setInterval(clock, 100);

}())