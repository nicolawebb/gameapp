$(document).ready(function(){
  startTimer();
  $('#timer').text(10 + ":" + 0);
  

  $(".indv-mission-yes-btn1").click(function(){
    passedIndvMission(1);
  });

  $(".indv-mission-yes-btn2").click(function(){
    passedIndvMission(2);
  });

  $(".group-mission-yes-btn1").click(function(){
    passedGroupMission(1);
  });

  $(".group-mission-yes-btn2").click(function(){
    passedGroupMission(2);
  });

  $(".indv-mission-no-btn1").click(function(){
    skipIndvMission(1);
  });

  $(".indv-mission-no-btn2").click(function(){
    skipIndvMission(2);
  });

  $(".group-mission-no-btn1").click(function(){
    skipGroupMission(1);
  });

  $(".group-mission-no-btn2").click(function(){
    skipGroupMission(2);
  });

  // $(".name-button").click(function(){
  //   alert("df");
  // });
 
});





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
    $('#timesupmodal').modal('show');
    const data = {'game': 'over'};
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

var items = Array("Mission 1", "Mission 2", "Mission 3", "Mission 4");

function passedIndvMission(cardID){
  var item = items[Math.floor(Math.random()*items.length)];
  new_text = item

  if(cardID==1){
    $('#indv-card-text1').text(new_text);

  }
  else if(cardID==2){
    $('#indv-card-text2').text(new_text);

  }
}

function passedGroupMission(cardID){
  var item = items[Math.floor(Math.random()*items.length)];
  new_text = item

  if(cardID==1){
    $('#group-card-text1').text(new_text);

  }
  else if(cardID==2){
    $('#group-card-text2').text(new_text);

  }
}

function skipIndvMission(cardID){
  var item = items[Math.floor(Math.random()*items.length)];
  new_text = item

  if(cardID==1){
    $('#indv-card-text1').text(new_text);

  }
  else if(cardID==2){
    $('#indv-card-text2').text(new_text);

  }
}

function skipGroupMission(cardID){
  var item = items[Math.floor(Math.random()*items.length)];
  new_text = item

  if(cardID==1){
    $('#group-card-text1').text(new_text);

  }
  else if(cardID==2){
    $('#group-card-text2').text(new_text);

  }
}