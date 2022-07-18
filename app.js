var myVar=setInterval(function(){myTimer(),currentDay()},1000);
     function myTimer()
     {
        var d=new Date();
        var options = {hour12: false};
        var t=d.toLocaleTimeString('ru-RU', {
            hourCycle: 'h23',
            hour: "2-digit",
            minute: "2-digit",
        });
        const div1 = document.getElementById("clock-face");
        const div2 = document.getElementById("clock-header");
        // var time = document.createElement("h1");
        // time.innerHTML = t;
        div1.innerHTML = t
        div2.innerHTML = t
        
        // document.getElementById("clock-face").innerHTML=t;
      }
    function myStopFunction()
     {
    clearInterval(myVar);
  }

    function currentDay(){
        const currDay = new Date();
        let day = currDay.getDay();
        console.log(day)
        dayDiv = document.getElementById("day");
        if(day === 0){
          dayDiv.innerHTML = "Sunday"
        }

        if(day === 1){
          console.log("Monday")
          dayDiv.innerHTML = "Monday"
        }

        if(day === 2){
          dayDiv.innerHTML = "Tuesday"
        }

        if(day === 3){
          dayDiv.innerHTML = "Wednesday"
        }

        if(day === 4){
          dayDiv.innerHTML = "Thursday"
        }

        if(day === 5){
          dayDiv.innerHTML = "Friday"
        }

        if(day === 6){
          dayDiv.innerHTML = "Saturday"
        }
    }

    