var timeEl = document.querySelector(".timeCountdown")
  var countdown = 60

  function startGame() {
    var timerInterval = setInterval(function() {
      countdown--;
      timeEl.textContent = "Time:" + countdown + " seconds left.";

      if(countdown < 1) {
        clearInterval(timerInterval);
        endgame();
      } else if (countdown === 0) {
        clearInterval(timerInterval);
        endgame();
      }

    }, 1000);
  }

var quiz = questions;

populate();

//function endgame() {
   // clearInterval(timer);
    //quiz
//}


