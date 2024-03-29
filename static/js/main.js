total = 0
$(document).ready(function(){
  startTimer();
  setStartMissions();
  $('#timer').text(600 + ":" + 0);
  

  $(".indv-mission-yes-btn1").click(function(){
    passedIndvMission(1);
    updateScore(3)
  });

  $(".indv-mission-yes-btn2").click(function(){
    passedIndvMission(2);
    updateScore(3)
  });

  $(".group-mission-yes-btn1").click(function(){
    passedGroupMission(1);
    updateScore(3)
  });

  $(".group-mission-yes-btn2").click(function(){
    passedGroupMission(2);
    updateScore(3)
  });

  $(".indv-mission-no-btn1").click(function(){
    skipIndvMission(1);
    updateScore(-3)
  });

  $(".indv-mission-no-btn2").click(function(){
    skipIndvMission(2);
    updateScore(-3)
  });

  $(".group-mission-no-btn1").click(function(){
    skipGroupMission(1);
    updateScore(-3)
  });

  $(".group-mission-no-btn2").click(function(){
    skipGroupMission(2);
    updateScore(-3)
  });

  // $(".text-button").click(function(){
  //   alert("df");
  // });


 
});

function updateScore(points){
    total += points
    $('#score').text(total);
    console.log(total)
}


function setStartMissions(){
  var item1 = indvitems[Math.floor(Math.random()*indvitems.length)];
  var item2 = indvitems[Math.floor(Math.random()*indvitems.length)];
  $('#indv-card-text1').text(item1);
  $('#indv-card-text2').text(item2);
  $('#group-card-text1').text("Everyone give a 10 second introduction");
  $('#group-card-text2').text("In room 1: Play one of the games on the paper");
}


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
    // console.log(m)
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

var indvitems = Array("Go to room 1", "Go to room 2", "Go to room 3", "Go to room 4", "Bring one person to a different room", 
  "Get everyone into the same room as you", "Get everyone to leave the room you are in", "Speak to someone you haven't spoken to yet",
  "Bring one person to room 1", "Bring one person to room 2", "Bring one person to room 3", "Bring one person to room 4", "Bring two people to room 4",
  "Distract someone from their task", "Get two people to talk to each other", "Don't say anything for 1 minute", "Don't move for 1 minute", "Make someone laugh",
  "Lie to someone", "Announce to the group how much time is remaining", "Ask someone what they are doing at the weekend");

var groupitems1 = Array("In room 2: Complete both jigsaws", "In room 3: Tell the robot an interesting fact", "In room 4: Debate one of the topics on the cards",
 "In room 3: Tell the robot an interesting fact", "In room 4: Debate one of the topics on the cards");
var groupitems2 = Array("In room 3: Make the robot laugh with a joke", "In room 4: Debate one of the topics on the cards", 
  "In room 1: Play one of the games on the paper", "In room 3: Make the robot laugh with a joke", "In room 4: Debate one of the topics on the cards", 
  "In room 1: Play one of the games on the paper");

function passedIndvMission(cardID){
  var item = indvitems[Math.floor(Math.random()*indvitems.length)];
  new_text = item

  if(cardID==1){
    $('#indv-card-text1').text(new_text);

  }
  else if(cardID==2){
    $('#indv-card-text2').text(new_text);

  }
}

count1 = 0
count2 = 0
function passedGroupMission(cardID){
  if(cardID==1){
    $('#group-card-text1').text(groupitems1[count1]);
    count1++
  }
  if(cardID==2){
    $('#group-card-text2').text(groupitems2[count2]);
    count2++
  }
}

function skipIndvMission(cardID){
  var item = indvitems[Math.floor(Math.random()*indvitems.length)];
  new_text = item

  if(cardID==1){
    $('#indv-card-text1').text(new_text);

  }
  else if(cardID==2){
    $('#indv-card-text2').text(new_text);

  }
}

function skipGroupMission(cardID){
  if(cardID==1){
    $('#group-card-text1').text(groupitems1[count1]);
    count1++
  }
  if(cardID==2){
    $('#group-card-text2').text(groupitems2[count2]);
    count2++
  }
}