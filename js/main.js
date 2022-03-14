// Select required elements
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


//Asynchronous function
setInterval(clock, 1000);


function clock() {
    const date = new Date();

    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    hour.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

    if (hr < 12) {
        document.getElementById("periods").innerHTML = "am";
        periods.style.color = "#90EE90";
        hour.style.color = "##BDC581";
        minutes.style.color = "#7FFFD4";
        seconds.style.color = "#006400";
    }
    else {
        document.getElementById("periods").innerHTML = "pm";
        periods.style.color = "#d35400";
        hour.style.color = "#7FFFD4";
        minutes.style.color = "#006400";
        seconds.style.color = "#BDC581";
    }
}