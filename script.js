let dates = {
  nyd:"1/1",
  mlkjd:"1/26",
  ghd:"2/2",
  vtd:"2/14",
  pd:"2/18",
  stpd:"3/17",
  nvwvd:"3/29",
  mod:"5/12",
  med:"5/27",
  dd:"6/6",
  id:"7/4",
  ld:"9/2",
  cd:"10/14",
  hw:"10/31",
  vd:"11/11",
  tgd:"11/28",
  bf:"11/29",
  cm:"12/2",
  ceve:"12/24",
  cday:"12/25",
  nyeve:"12/31"
}
function on() {
  for(let x=0;x<20;x++){
    let y = document.createElement('option');
    y.value = "/" + (-100 + new Date().getYear() + x);
    y.textContent = 1900 + new Date().getYear() + x;
    document.getElementById('year').appendChild(y);
  }
  if(location.search !== "") {
    let x = location.search.split("?").join("").split("of");
    document.getElementById('event').value = x[0];
    document.getElementById('year').value = "/" + x[1];
  }
}
function load() {
  // Time Till Display
  let timetill = (new Date(dates[document.getElementById('event').value]+document.getElementById('year').value).getTime() - new Date().getTime()) / 1000;
  if(timetill >= 0) { 
    let years = (timetill - (timetill % 31536000)) / 31536000;
    let days = (timetill - (timetill % 86400)) / 86400;
    let hours = (timetill - (timetill % 3600)) / 3600;
    let minutes = (timetill - (timetill % 60)) / 60;
    let seconds = Math.floor(timetill);
    seconds = (seconds - (minutes * 60)).toString();
    minutes = (minutes - (hours * 60)).toString();
    hours = (hours - (days * 24)).toString();
    days = (days - (years * 365)).toString();
    if (seconds.length !== 2) {
      seconds = "0" + seconds;
    }
    if (minutes.length !== 2) {
      minutes = "0" + minutes;
    }
    if (hours.length !== 2) {
      hours = "0" + hours;
    }
    if (days.length !== 3) {
      if (days.length === 2) {
        days = "0"+ days;
      }else if (days.length === 1) {
        days = "00" + days;
      }
    }
    document.getElementById('time').innerHTML = (years+":"+days+":"+hours+":"+minutes+":"+seconds);
  }else {
    document.getElementById('time').innerHTML = "Past";
  }
  // Current Time Display
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let e = " AM";
  if (h > 12) {
    h = h - 12;
  }
  if (h > 11) {
    e = " PM";
  }
  if (m.toString().length < 2) {
    m = "0" + m.toString();
  }
  if (s.toString().length < 2) {
    s = "0" + s.toString();
  }
  document.getElementById('current').innerHTML = h + ":" + m + ":" + s + e;
}setInterval(load, 0);
