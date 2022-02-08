const gameDecision = {

    victory : function () {
        if (cardsState.numberOfMatchedCard == 30) {
          
          clearInterval(countdown.timer);
          alert.victory(countdown.timeLeft);
          gameDecision.disableAllCards();
        }
      },

      defeat : function () {
        let cardTimer = document.querySelector(".card-timer");
        gameDecision.disableAllCards();
        alert.gameOver();
        clearInterval(countdown.timer);
      },

      disableAllCards : () => {
        for(card of launcher.cards){
            card.classList.add("disabled");
        }
      }

}