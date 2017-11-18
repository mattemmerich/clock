function countdown(){
  var baseball = new Date("March 29, 2018 12:00:00 PM");
  var now = new Date();
  var timeDiff = baseball.getTime() - now.getTime();
  if (timeDiff <= 0) {
    clearTimeout(timer);
    document.write("Christmas is here!");
  }


  var seconds = Math.floor(timeDiff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes /60);
  var days = Math.floor(hours /24);
  hours %= 24;
  minutes %= 60;
  seconds %= 60;


  document.getElementById("daysBox").innerHTML = days;
  document.getElementById("hoursBox").innerHTML = hours;
  document.getElementById("minsBox").innerHTML = minutes;
  document.getElementById("secsBox").innerHTML = seconds;

  var timer = setTimeout('countdown()', 1000);

}
countdown()
