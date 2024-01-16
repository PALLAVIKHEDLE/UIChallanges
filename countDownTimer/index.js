// Immediately Invoked Function Expression (IIFE) to encapsulate the code and avoid polluting the global scope
(function(){
    let second=1000,
        minute=second*60,
        hour=minute*60,
        day=hour*24;
    
     let today= new Date(),
         dd=String(today.getDate()).padStart(2,"0"),// Get day with leading zero if needed
         mm=String(today.getMonth()+1).padStart(2,'0'),// Get month with leading zero if needed
         yyyy=today.getFullYear(),
         nextYear=yyyy+1
         dayMonth="10/28/",
         birthday=dayMonth+yyyy;// Set initial birthday date

    
         today=mm+"/"+dd+"/"+yyyy //Format current date
         // Check if today is after the birthday, update birthday to next year if true
         if(today>birthday) birthday=dayMonth+nextYear

    
    let countDown=new Date(birthday).getTime(),
         x=setInterval(function(){
            const now=new Date().getTime(),
                  distance=countDown-now;
                document.getElementById('days').innerText=Math.floor(distance/(day));
                document.getElementById('hours').innerText=Math.floor((distance%(day))/(hour));
                document.getElementById('minutes').innerText=Math.floor((distance%(hour))/(minute));
                document.getElementById('seconds').innerText=Math.floor((distance%(minute))/second);

                  // Check if the countdown has reached zero (birthday)
                if(distance<0){ 
                    document.getElementById('headline').innerText="It's my birthday!"
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("content").style.display = "block";
                    clearInterval(x);
                 }
            },0) // Interval set to 0, meaning it updates continuously
    }());