startTimer();
$('#timer').text(10 + ":" + 0);


function startTimer() {
  var presentTime = $('#timer').text();
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
    if(m<0){
      return
    }

    $('#timer').text(m + ":" + s);
    console.log(m)
  setTimeout(startTimer, 1); //1000
  onEnd(presentTime);
}
 

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;

}

function onEnd(timerText){
   if(timerText == "0:01"){
    const data = {'name': 'Tom'};
    fetch('/missions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    .then(response => response)
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });  
  }
}
