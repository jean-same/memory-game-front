const cardsState = {

    // Propriete qui sera un tableau vide au moment de son initialisation
    openedCards : [],

    moves : null,

    numberOfMatchedCard : 0,

    init : () => {
        console.log("State");

        for(let card of launcher.cards){
            /* Je place un ecouteur d'evenement "click" sur chaque cards
                pour gerer l'affichage de la card selectionnée par l'utilisateur et 
                pour remplir la propriete des cards ouvertes
            */
            card.addEventListener("click", cardsState.displayCard);
            card.addEventListener("click", cardsState.cardOpen);
        }
    },

    displayCard : function () {
        /** A chaque appel de cette methode j'ajoute
         *  1 - une classe "open" qui gere l'affichage des icones
         *  2 - une classe "show" pour augmenter la taille de l'icone
         *  3 - une classe "disabled" pour desactiver les evenements sur la card ouverte
         * 
        */
        this.classList.toggle("open");
        this.classList.toggle("show");
        this.classList.toggle("disabled");
    },

    cardOpen : function() {
        /** A chaque appel de cette methode
         *  - Je fais un push pour ajouter la card courante dans le tableau des cards ouvertes
         */
        cardsState.openedCards.push(this);

        let cardOpenedArrayLength = cardsState.openedCards.length;

        /**
         * Si 2 cards ont été ouvertes je vais verifier si elles correspondent ou pas
         */
        if (cardOpenedArrayLength === 2) {

            cardsState.moveCounter();
            // Je compare le nom des 2 icones 
            /**
             * Si oui, je fais appel à ma methode matched
             * Si non je fais appel à ma methode unmatched
             */
          if (cardsState.openedCards[0].dataset.icon === cardsState.openedCards[1].dataset.icon ) {
            cardsState.matched();
            cardsState.numberOfMatchedCard += 2;
            console.log("matched")
          } else {
            cardsState.unmatched();
            console.log("unmatched")
          }
        }
    },

    matched : function() {
        /**
         * Je rejoute la classe "match" et je desactive les cards
         * Ensuite j'enlève les classes "show", "open"
         * Et je vide le tableau des cards ouvertes
         * 
         */
        cardsState.openedCards[0].classList.add("match", "disabled");
        cardsState.openedCards[1].classList.add("match", "disabled");
        cardsState.openedCards[0].classList.remove("show", "open", "no-event");
        cardsState.openedCards[1].classList.remove("show", "open", "no-event");
        cardsState.openedCards = [];
      },

    unmatched : function() {
        /**
         * Je rajoute la classe "unmatched sur les 2 cards"
         */
        cardsState.openedCards[0].classList.add("unmatched");
        cardsState.openedCards[1].classList.add("unmatched");
        cardsState.disable();
        /**
         * Je fais un setTimeout d'1 seconde avant d'enlever l'ensemble
         * des classes sur les 2 cards
         */
        setTimeout(function () {
        cardsState.openedCards[0].classList.remove("show", "open", "no-event", "unmatched");
        cardsState.openedCards[1].classList.remove("show", "open", "no-event", "unmatched");
        cardsState.enable();
          cardsState.openedCards = [];
        }, 1000);
      },

      /**
       * Cette methode permet de desactiver les autres cards quand 2 cards unmatched
       * sont encore affichées
       */
      disable : function() {
          /**
           * Pour chaque cards j'ajoute la classe disabled
           */
        [].filter.call(launcher.cards, function (card) {
          card.classList.add("disabled");
        });
      },

      /**
       * Cette methode permet de reactiver toutes les cards(sauf les cards contenant la classe match) quand aucune cards unmatched n'est affichée
       */
      enable : function() {
        [].filter.call(launcher.cards, function (card) {     
          if(!card.classList.contains("match") ) {
            card.classList.remove("disabled");
          }
        });
      },

      /**
       * Cette methode est appelée quand le tableau contenant les cards ouvertes contient 2 cards
       */
      moveCounter : function () {
          // Incrementation de la propriete moves
        cardsState.moves++;
        // Si la propriete move est egal à 1 le compteur de temps est lancé
        if (cardsState.moves == 1) {
          countdown.init();
        }
      },
}