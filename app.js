var msec = 0
var sec = 0
var min = 0
var hr = 0
var count =1
var msecHeading = document.getElementById('msec')
var secHeading = document.getElementById('sec')
var minHeading = document.getElementById('min')
var hrHeading = document.getElementById('hr')
var intervel;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0
    } else if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 0
    } else if (min >= 60) {
        hr++
        hrHeading.innerHTML = hr
        min = 0
    }


}

function start() {
    var btn = document.getElementById('disable')
    btn.disabled = true
    intervel = setInterval(timer, 10)

}


function stop() {
    var btn = document.getElementById('disable')
    btn.disabled = false
    clearInterval(intervel)
}
function reset() {
    var btn = document.getElementById('disable')
    btn.disabled = true
    msec = 0
    sec = 0
    min = 0
    hr = 0
    count = 1   
    msecHeading.innerHTML = msec
    secHeading.innerHTML = sec
    minHeading.innerHTML = min
    hrHeading.innerHTML = hr
    stop()
    var data = document.getElementById('data')
    data.innerHTML = ""
}

function lap(){
    var data = document.getElementById('data')
    data.innerHTML += "Lap " + count + "= " + hr  + ":"  + min + ":" + sec + ":" + msec +  "<br>";
    count++
}