
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
  // ===========================================================================
  // click main time
  // ===========================================================================
  $('.time').on('click', function (e) {
    e.preventDefault();
    if (interval >= 1) {
      stopTime();
      interval = 0;
    } else {
      startTimer(sessionLengthMin * 60, $('.time'));
    }
  });
  // ===========================================================================
  // click break length - plus
  // ===========================================================================
  $('.break-plus').on('click', function (e) {
    e.preventDefault();
    if (breakLengthMin === 60) {
      breakLengthMin = 60;
    } else {
      breakLengthMin += 1;
    }
    $('.break-minute').text(breakLengthMin);
  });
  // ===========================================================================
  // click break length - minus
  // ===========================================================================
  $('.break-minus').on('click', function (e) {
    e.preventDefault();
    if (breakLengthMin === 1) {
      breakLengthMin = 1;
    } else {
      breakLengthMin -= 1;
    }
    $('.break-minute').text(breakLengthMin);
  });
  // ===========================================================================
  // click session length - plus
  // ===========================================================================
  $('.session-plus').on('click', function (e) {
    e.preventDefault();
    if (sessionLengthMin === 120) {
      sessionLengthMin = 120;
    } else {
      sessionLengthMin += 1;
    }
    $('.session-minute').text(sessionLengthMin);
  });
  // ===========================================================================
  // click session length - minus
  // ===========================================================================
  $('.session-minus').on('click', function (e) {
    e.preventDefault();
    if (sessionLengthMin === 1) {
      sessionLengthMin = 1;
    } else {
      sessionLengthMin -= 1;
    }
    $('.session-minute').text(sessionLengthMin);
  });
}

/**
 * Function startTimer initialize start seconds count and display in DOM
 * @param {number} seconds - set seconds
 * @param {obj} element - set tag element $() selector
 * @param {bool} b - optional argument for set breakSession
 */
function startTimer(seconds, element, b) {
  var minutes, seconds, timer = seconds;
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    element.text(minutes + ":" + seconds);

    if (--timer < 0) {
      timer = seconds;
      stopTime();
      interval = 0;
      if (b === true) {
        stopTime();
        interval = 0;
      } else {
        breakSession(breakLengthMin);
      }
    }
  }, 1000);
}

/**
 * Function stopTime - clear interval
 */
function stopTime() {
  clearInterval(interval);
}

/**
 * Function breakSession - run function startTimer with 3-rd arguments (option)
 * for the implementation of a single run of the function
 * @param {number} b - seconds 
 */
function breakSession(b) {
  startTimer(b * 60, $('.time'), true);
}

gradients();
clickTimer();
