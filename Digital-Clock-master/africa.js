let a;
let date;
let time;
const options = {weekday: 'long', year:'numeric', month: 'long', day: 'numeric'};
setInterval(() => {
a = new Date()
date = a.toLocaleDateString(undefined, options);
hours = a.getHours()-3
minutes = a.getMinutes()-30
time = hours + ':' + minutes + ':' + a.getSeconds();
document.getElementById('time2').innerHTML = time + "<br>on " + date;
}, 1000)