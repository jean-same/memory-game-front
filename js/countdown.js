const countdown = {

    timeInSecs : null,
    timer : null,
    timeLeft : null,
    fixedSecs : 300,

    init: () => {
        console.log('countdown');

        countdown.startTimer();
        
    },

    startTimer : function(secs) {
        countdown.timeInSecs = parseInt(countdown.fixedSecs);
        countdown.fixedSecs = parseInt(countdown.fixedSecs);
        countdown.timer = setInterval("countdown.timerInitialize()", 1000); 
    },

    timerInitialize : () => {
        countdown.counterProgressBar();
        let cardTimer = document.querySelector(".card-timer");
        let seconds = countdown.timeInSecs;

        /**
         * Si seconds est superieur à 0 je decremente le temps en seconde
         * J'affiche le compteur grace à la methode displayFormat
         */
        if (seconds > 0) {
            countdown.timeInSecs--;
            countdown.displayFormat(seconds);
            gameDecision.victory();
                      
            cardTimer.style.background="#198754";

            /**
             * Condition pour changer la couleur de fond en fonction du pourcentage
             */
            if(countdown.percentage() <= 50) {
                cardTimer.style.background="#ffc107";
            }
            if (countdown.percentage() <= 20){
                cardTimer.style.background="#dc3545";
            }
        }
        else if(seconds == 0) {
            gameDecision.defeat();
        }
      
        
    },

    displayFormat : (seconds) => {
        let mins = Math.floor(seconds/60);
        seconds %= 60;
        countdown.timeLeft = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (seconds < 10) ? "0" : "" ) + seconds;
      
        // Ajout du compteur dans le span prevu a cet effet
        document.getElementById("countdown").innerHTML = countdown.timeLeft;
    },

    counterProgressBar : () => {
        // Recuperation de la div qui affiche la barre de progression
        let progressBar = document.querySelector(".progress-bar ");

        // Ajout dynamique du pourcentage dans la barre de progression
        progressBar.style.width = countdown.percentage() + "%"

        /**
         * conditions ternanire pour changer la couleur de fond de la barre de progression
         * c'est l'equivalent de  => if(percentage < 50) {
            progressBar.classList.replace("bg-success" , "bg-warning")
        }
         */
        countdown.percentage() < 50 ? progressBar.classList.replace("bg-success" , "bg-warning") : "" ;
        countdown.percentage() < 20 ? progressBar.classList.replace("bg-warning" , "bg-danger") : "" ;

    },

    percentage : () => {
        return (countdown.timeInSecs * 100) / countdown.fixedSecs;
    }
    

    

}