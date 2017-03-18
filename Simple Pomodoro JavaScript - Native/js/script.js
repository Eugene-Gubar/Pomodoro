/**
 * This is a simple timer in native javascript.
 * Author: Eugene Gubar
 */


window.onload = function () {

    (function () {

        var count    = 0,
            minutes  = 0,
            seconds  = 0,
            mseconds = 0,
            interval;

        /* ---------------------------------- begin [button] -----------------------------------*/
        var btnStart  = getID('timer_start'),
            btnStop   = getID('timer_stop'),
            btnReset  = getID('timer_reset');
        /* ----------------------------------- end [button] ------------------------------------*/



        /* ---------------------------------- begin [events] -----------------------------------*/
        btnStart.onclick = startHandler;
        btnStop.onclick  = stopHandler;
        btnReset.onclick = resetHandler;
        /* ----------------------------------- end [events] ------------------------------------*/

       

        /* ---------------------------------- begin [handler] ----------------------------------*/

        /**
         * Function startHandler - Run count in seconds and show changes.
         */
        function startHandler() {

            var elTimerID = getID('id_timer');
            if (interval === undefined) {

                interval = setInterval(function () {

                    minutes = parseInt(count / 60, 10)
                    seconds = parseInt(count % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    count++;

                    elTimerID.innerHTML = minutes + ":" + seconds;

                }, 1000);
                
            }

        }

        /**
         * Function stopHandler - Clear setInterval and set 'undefined'.
         */
        function stopHandler() {
            clearInterval(interval);
            interval = undefined;
        }

        /**
         * Function resetHandler - Sets all values to zero. 
         */
        function resetHandler() {
            count    = 0,
            minutes  = 0,
            seconds  = 0,
            mseconds = 0;
        }

        /* ----------------------------------- end [handler] -----------------------------------*/



        /* ------------------------------ begin [utility function] ---------------------------- */

        /**
         * Function getID - Helper function to retrieve an item by its 'ID'.
         * @param {string} id 
         */
        function getID(id) {
            return document.getElementById(id);
        }

        /**
         * Function getClass - Helper function to retrieve an item by its 'class'.
         * @param {string} c 
         */
        function getClass(c) {
            return document.getElementsByClassName(c);
        }

        /* ------------------------------- end [utility function] ----------------------------- */

    })();

};