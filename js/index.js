// before read this code, i have to notice that i am not english native. So please excuse me when will write bad english :)

$(document).ready(function(){
  // all variables an functions that will be used in the code.
  let sessionTime = 25;
  let breakTime = 5;
  let hours = 0;
  let minutes = sessionTime -1;
  let seconds = 60;
  let start;
  let stop;
  let bHours = 0;
  let bMinutes = breakTime -1;
  let bSeconds = 60;
  let breakRunTime;
  let sessionRunTime;
  
 // write the session and break durations inside their fields.
  $("#setB").text(breakTime);
  $("#setS").text(sessionTime);
  
  // when this button is clicked it reduce breakTime variable buy 1. 
  $("#minusB").click(function(){
    $("#timer-box").css("background-color","#d1e0e0");
    stop = clearInterval(start);
    if(breakTime > 0){
    breakTime-=1;
    bMinutes = breakTime -1
    $("#setB").text(breakTime);
    }
  })
  
  // when this button is clicked it increase breakTime variable buy 1. 
    $("#plusB").click(function(){
    $("#timer-box").css("background-color","#d1e0e0");
    stop = clearInterval(start);
    breakTime+=1;
    bMinutes = breakTime -1
    $("#setB").text(breakTime);
  })
  
  
 // when this button is clicked it reduce sessionTime variable buy 1.  
  $("#minusS").click(function(){
    $("#timer-box").css("background-color","#d1e0e0");
    stop = clearInterval(start);
    if(sessionTime > 0){
    sessionTime-=1;
    $("#setS").text(sessionTime);
    $("#timer").text(sessionTime);
           if( sessionTime % 60 == 0 && sessionTime !== 0){
          hours = Math.floor(sessionTime/60) - 1;
          minutes = 59;
          seconds = 60;
            }  else if( sessionTime == 0){
              hours = 0;
              minutes = 0;
              seconds = 0;
              $("#setS").text(sessionTime);
              $("#timer").text(sessionTime);
              } 
            else{
          hours = Math.floor(sessionTime/60);
          minutes = (sessionTime % 60) - 1;
          seconds = 60;
        }
    }
   
  })
  
  
   // when this button is clicked it increase sessionTime variable buy 1. 
  $("#plusS").click(function(){
    stop = clearInterval(start);
    sessionTime+=1;
    $("#timer-box").css("background-color","#d1e0e0");
    $("#setS").text(sessionTime);
    $("#timer").text(sessionTime);
    if( sessionTime % 60 == 0 && sessionTime !==0){
      hours = Math.floor(sessionTime/60) - 1;
      minutes = 59;
      seconds = 60;
    }  else if( sessionTime == 0){
    hours = 0;
    minutes = 0;
    seconds = 0;
    $("#setS").text(sessionTime);
    $("#timer").text(sessionTime);
    }
    else{
      hours = Math.floor(sessionTime/60);
      minutes = (sessionTime % 60) - 1;
      seconds = 60;
    }
  })
 
  
// This is countdown function for break.  
breakRunTime = function(){
    if( bSeconds == 0 && bMinutes == 0 && bHours == 0 ){ // when breakTime is done reasign value of hours minutes and seconds varibles for new sessionTime.
                  if( sessionTime % 60 == 0 && sessionTime !==0){
                      hours = Math.floor(sessionTime/60) - 1;
                      minutes = 59;
                      seconds = 60;
                    }  else if( sessionTime == 0){
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                    $("#setS").text(sessionTime);
                    $("#timer").text(sessionTime);
                    }
                    else{
                      hours = Math.floor(sessionTime/60);
                      minutes = (sessionTime % 60) - 1;
                      seconds = 60;
                    }
           stop = clearInterval(start);  // Stop last session before the next.
           start = setInterval(sessionRunTime, 1000); // countdown function for a new prodomoro session after a break.
           } else if( bSeconds == 0 && bMinutes == 0 && bHours > 0){
             bHours -=1;
             bMinutes = 59;
             bSeconds = 60;
             $("#timer").text(String("0"+bHours).slice(-2) + "H:" +String("0"+bMinutes).slice(-2) + "Min:" + String("0"+bSeconds).slice(-2) + "s");
             $("#timer-box").css("background-color","#ff0066");
             $("#info").text("BREAK !");
           } else if(bSeconds == 0 && bMinutes > 0 && bHours > 0){
             bMinutes -=1;
             bSeconds = 60;
            $("#timer").text(String("0"+bHours).slice(-2) + "H:" +String("0"+bMinutes).slice(-2) + "Min:" + String("0"+bSeconds).slice(-2) + "s");
             $("#timer-box").css("background-color","#ff0066");
             $("#info").text("BREAK !");
           }
             else if(bSeconds == 0 && bMinutes > 0 && bHours == 0){
             bMinutes -=1;
             bSeconds = 60;
             $("#timer").text(String("0"+bMinutes).slice(-2) + "Min:" + String("0"+bSeconds).slice(-2) + "s");
             $("#timer-box").css("background-color","#ff0066");
             $("#info").text("BREAK !");
           } else if( bMinutes == 0 && bHours == 0 && bSeconds > 0){
             bSeconds -=1;
             $("#timer").text(String("0"+bSeconds).slice(-2) + "s");
             $("#timer-box").css("background-color","#ff0066");
             $("#info").text("BREAK !");
           } 
            else {
             bSeconds -=1;
             $("#timer").text(String("0"+bMinutes).slice(-2) + "Min:" + String("0"+bSeconds).slice(-2) + "s");
             $("#timer-box").css("background-color","#ff0066");
             $("#info").text("BREAK !");
           }

          }
     
     
  // This is countdown function for a prodomoro session.
  sessionRunTime = function(){
   if( seconds == 0 && minutes == 0 && hours == 0 ){
      
     if( breakTime % 60 == 0 && breakTime !==0){
      bHours = Math.floor(breakTime/60) - 1;
      bMinutes = 59;
      bSeconds = 60;
    }  else if( breakTime == 0){
    bHours = 0;
    bMinutes = 0;
    bSeconds = 0;
    $("#setS").text(sessionTime);
    $("#timer").text(sessionTime);
    }
    else{
      bHours = Math.floor(breakTime/60);
      bMinutes = (breakTime % 60) - 1;
      bSeconds = 60;
    }
   stop = clearInterval(start);
   start = setInterval(breakRunTime, 1000); // countdown function for a break session after a prodomoro.
   } else if( seconds == 0 && minutes == 0 && hours > 0){
     hours -=1;
     minutes = 59;
     seconds = 59;
     $("#timer").text(String("0"+hours).slice(-2) + "H:" +String("0"+minutes).slice(-2) + "Min:" + String("0"+seconds).slice(-2) + "s");
     $("#timer-box").css("background-color","#00ff00");
     $("#info").text("SESSION");
   } else if(seconds == 0 && minutes > 0 && hours > 0){
     minutes -=1;
     seconds = 59;
     $("#timer").text(String("0"+hours).slice(-2) + "H:" +String("0"+minutes).slice(-2) + "Min:" + String("0"+seconds).slice(-2) + "s");
     $("#timer-box").css("background-color","#00ff00");
     $("#info").text("SESSION");
   } else if(seconds == 0 && minutes > 0 && hours == 0){
     minutes -=1;
     seconds = 59;
     $("#timer").text(String("0"+minutes).slice(-2) + "Min:" + String("0"+seconds).slice(-2) + "s");
     $("#timer-box").css("background-color","#00ff00");
     $("#info").text("SESSION");
   } 
    else if( minutes == 0 && hours == 0 && seconds > 0){
     seconds -=1;
     $("#timer").text(String("0"+seconds).slice(-2) + "s");
     $("#timer-box").css("background-color","#00ff00");
     $("#info").text("SESSION");
   } 
    else {
     seconds -=1;
     $("#timer").text(String("0"+minutes).slice(-2) + "Min:" + String("0"+seconds).slice(-2) + "s");
     $("#timer-box").css("background-color","#00ff00");
     $("#info").text("SESSION");
   }
    
  }

// start a prodomoro clock.  
$("#start").click(
  function(){
    stop = clearInterval(start);
    start = setInterval(sessionRunTime, 1000);
    }
 );
  
// stop a prodomoro clock.  
$("#stop").click(function(){
  stop = clearInterval(start);
})

  
    }); // End of document ready.