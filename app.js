const hours = document.getElementById('hours');
const minutes = document.getElementById('minute');
const second = document.getElementById('second');

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hours.style.transform = `rotate(${hRotation}deg)`;
    minutes.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);