window.onload = function () {
 
    var mili = 00;
    var seconds = 00;
    var minutes = 00;

    var intervalTimp;

    appendMili = document.getElementById("mili");
    appendSeconds = document.getElementById("seconds");
    appendMinutes = document.getElementById("minutes");

    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    buttonStart.onclick = function () {
        clearInterval(intervalTimp);
        intervalTimp = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(intervalTimp);
    }

    buttonReset.onclick = function () {
        
        clearInterval(intervalTimp);
        mili = "00";
        seconds = "00";
        //minutes = "00";

    }

    function startTimer (){
        
        mili ++;

        if(mili < 9) {
            appendMili.innerHTML = "0" + mili;
        }
        else {
            appendMili.innerHTML = mili;
        }

        if(mili > 99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            mili = 0;
            appendMili.innerHTML = "0" + mili;
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        } 

        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds;
        }

    }

}