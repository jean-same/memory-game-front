const gameDecision = {

    victory : function () {
      // Si toutes les cards ont 
        if (cardsState.numberOfMatchedCard == 30) {
          
          // Je fais un fetch sur l'url qui renvoie le meilleur score du jeu
          fetch(ajax.baseUri + "bestscore", ajax.fetchOptions )

          .then(function(response) {
              return response.json()
          })
  
          .then(function(responseJSON){
            // J'initialise la variable bestScoreString
            let bestScoreString = ""
            /**
             * Je fais appel à la methode victory affiche l'alert
             * Je passe la quantité de secondes restante à cette methode
             * Si le nombre de seconde restant est superieur au meilleur, je rajoute une phrase pour dire à l'utilisateur qu'il a battu le record...
             */
              alert.victory(countdown.timeLeft , countdown.timeInSecs > responseJSON.nbSeconds ? bestScoreString = "Et vous avez battu le record de temps 👏👏👏👏👏👏👏👏👏👏👏" : "" );
          })

          // J'envoie le nouveau score vers le back pour l'ajout dans la bdd
          ajax.addNewScore();
          // Je fais un clearInterval pour arreter le timer
          clearInterval(countdown.timer);
          // Je desactive toutes les cards
          gameDecision.disableAllCards();
        }
      },

      defeat : function () {
        // Je fais appel à la methode gameOver pour dire à l'utilisateur qu'il a perdu
        alert.gameOver();
        clearInterval(countdown.timer);
        gameDecision.disableAllCards();
      },

      disableAllCards : () => {
        for(card of launcher.cards){
            card.classList.add("disabled");
        }
      }

}