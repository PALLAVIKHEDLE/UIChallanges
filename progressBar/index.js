function ProgressBar() {
     // Get the progress and bar elements from the DOM
    const progressElem = document.getElementById('progress');
    const barElem = document.getElementById('bar');
    let lastPercent = 0;
    let intervalId;
    
     // Return an object with two methods: update and level
    return {
        // Update method to update the progress bar based on the provided percentage
      update: (percent) => {
           // If the progress is already at 100%, do nothing
        if (lastPercent >= 100) return;
        
        // Get the maximum width of the progress element
        const maxWidth = progressElem.getBoundingClientRect().width;
        let nextPercent = lastPercent + percent;
        
         // Ensure nextPercent does not exceed 100%
        if (nextPercent > 100)nextPercent = 100;
        
    // Update lastPercent and calculate the width based on the percentage
        lastPercent = nextPercent;
        const width = Math.floor((nextPercent/ 100) * maxWidth);
        barElem.style.width = `${width}px`;
      },
       // Level method to get the last recorded percentage
      level: () => lastPercent
    };
  }
  
  const progress = ProgressBar();
  
 //function animateWithSetInterval(timeMS) {
//     let intervalId;
//     const progressElem = document.getElementById('progress');
//     const barElem = document.getElementById('bar');  
//     const maxWidth = progressElem.getBoundingClientRect().width;
//      // Calculate frames per second
//     const fps = 1000 / 60;
//       // Calculate pixels per frame to reach the maximum width in the given time
//     const per = maxWidth / (timeMS / fps);
//     let width = 0;
    
//     intervalId = setInterval(() => {
//          // If the width reaches the maximum, stop the animation
//       if (width >= maxWidth) {
//         console.log('stop animation', width);
//         clearInterval(intervalId);
//         return;
//       }
//       width += per;
//       barElem.style.width = `${width}px`;
//     }, fps);
//   }
  //  
  function animateWithRequestAnimationFrame(timeMS) {
    let animationFrameId;
    const progressElem = document.getElementById('progress');
    const barElem = document.getElementById('bar');  
    const maxWidth = progressElem.getBoundingClientRect().width;
    let width = 0;
    const fps = 1000 / 60;
    const per = maxWidth / (timeMS / fps);
    
    const start = performance.now();
    
    function loop() {
      if (width >= maxWidth) {
        const end = performance.now();
        console.log('running time', (end - start) / 1000);
        cancelAnimationFrame(animationFrameId);
        return;
      }
      
      width += per;
      barElem.style.width = `${width}px`;
      animationFrameId = requestAnimationFrame(loop);
    }
    
    animationFrameId = requestAnimationFrame(loop);
  }
  
  animateWithRequestAnimationFrame(5000);
  
  
  