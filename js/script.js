
// =============================================================================
// POMODORO
// =============================================================================

var breakLengthMin = 5,
  sessionLengthMin = 25,
  interval;

/**
 * Function getRandomInt is not yet used. Maybe future will used
 * @param   {number} min 
 * @param   {number} max 
 * @returns {number} return random int number 
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Function gradients - set background flat gradient color and realize even keyPress button <left, right>
 */
function gradients() {

  $.getJSON("https://raw.githubusercontent.com/Eugene-Gubar/FlatColors/master/js/gradients.json", function (json) {
    var i = 38;
    function setCssGradient(i) {
      $('body').css({
        background: "-webkit-linear-gradient(to left, " + json[i].colors[0] + ", " + json[i].colors[1] + ")",
        background: "-o-linear-gradient(to left, " + json[i].colors[0] + ", " + json[i].colors[1] + ")",
        background: "-moz-linear-gradient(to left, " + json[i].colors[0] + ", " + json[i].colors[1] + ")",
        background: "linear-gradient(to left, " + json[i].colors[0] + ", " + json[i].colors[1] + ")"
      });
    }
    setCssGradient(i);
    $('body').keydown(function (e) {
      if (e.which == 37) { // left
        i <= 0 ? i = 0 : i -= 1;
        setCssGradient(i);
      }
      else if (e.which == 39) { // right
        i >= json.length - 1 ? i = i : i += 1;
        setCssGradient(i);
      }
    });
  });

}

/**
 * Function clickTimer set break and session
 * @param {number} s - interval session seconds
 */
function clickTimer() {
  $('.time').on('click', function (e) {
    e.preventDefault();
    if (interval >= 1) {
      stopTime();
      interval = 0;
    } else {
      startTimer(sessionLengthMin * 60, $('.time'));
    }
  });
}

/**
 * Function startTimer initialize start seconds count and display in DOM
 * @param {number} seconds - set seconds
 * @param {obj} element - set tag element $() selector
 */
function startTimer(seconds, element) {
  var minutes, seconds, timer = seconds;
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    element.text(minutes + ":" + seconds);

    if (--timer < 0) {
      timer = seconds;
    }
  }, 1000);
}

function stopTime() {
  clearInterval(interval);
}

/*

function min(m) {
  seconds = m * 60;
}


function break(b) {

}

function click() {
  
}*/

gradients();
clickTimer();
