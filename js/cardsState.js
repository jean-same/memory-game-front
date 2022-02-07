const cardsState = {

    // Propriete qui sera un tableau vide au moment de son initialisation
    openedCards : [],

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
    },
}