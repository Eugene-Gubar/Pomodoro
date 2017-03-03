
// =============================================================================
// POMODORO
// =============================================================================

var breakLength = 5,
    sessionLength = 25,
    interval;

var objMinSec = {
  minutes: 25,
  seconds: 00
};

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
 * Function timer set break and session
 * @param {number} s - interval session seconds
 */
function timer() {
  $('.time').on('click', function (e) {
    e.preventDefault();
    if (interval >= 1) {
      stopTime();
      interval = 0;
    } else {
      interval = setInterval(function () { eHandlerTime (); }, 1000);
    }
  });
}

function eHandlerTime() {
  // $('.second').text(sessionLength -= 1);
  console.log(sessionLength);
  if (sessionLength <= 0) {
    stopTime();
  } else {
    $('.second').text(('0' + (sessionLength -= 1)).slice(-2));
  }
}

function stopTime() {
  clearInterval(interval);
}

/*

function session(s) {

}
function break(b) {

}

function click() {
  
}*/

gradients();
timer();
