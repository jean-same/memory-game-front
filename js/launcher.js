const launcher = {

    // Je recupere l'ensemble des cards en utilisannt le qyerySelectorAll
    // Avec le querySelector on recupere une Nodelist, je fais la conversion en tableau avec "Array.from"
    cards : Array.from(document.querySelectorAll(".card")),

    // Recuperation du board
    board : document.getElementById("card-board"),

    init : () => {
        console.log("launch");
        launcher.startGame();

        document.querySelector(".card-restart").addEventListener("click" , launcher.playAgain);
    },

    startGame: function() {
        cardsState.openedCards = [];

        // Je melange les cards aleatoirement avec la methode shuffleCard
        cards = launcher.shuffleCard(launcher.cards);
  
        for (let i = 0; i < cards.length; i++) {
            //Je vide le contenu du board
            launcher.board.innerHTML = "";
            [].forEach.call(cards, function (item) {
            // J'ajoute les cards prealablement melangées
              launcher.board.appendChild(item);
            });
            cards[i].classList.remove("show", "open", "match", "disabled");
          }
  
    },
  
    shuffleCard: function (cards) {
        // Je recupere la longueur du tableau des cards qui correspnd au nombres de cases
        // J'initialise une valeur temporaire et un index aleatoire
          let cardsArrayLength = cards.length,
          temporaryValue,
          randomIndex;
      
          // Tant que la longueur du tableau est different de 0
          while (cardsArrayLength !== 0) {
              // Je genere un index aleatoire en utilisant la fonction Math.random
              randomIndex = Math.floor(Math.random() * cardsArrayLength);
              // Je decremente la longueur du tableau
              // Je pouvais aussi faire cardArrayLength--
              cardsArrayLength -= 1;
              // Je recupere une card temporaire
              temporaryValue = cards[cardsArrayLength];
              cards[cardsArrayLength] = cards[randomIndex];
              // Je rempli une card aleatoire avec la valeur temporaire
              cards[randomIndex] = temporaryValue;
          }
          return cards;
      },

      playAgain : function () {
        //app.moves = 0;
        clearInterval(countdown.timer);
        document.getElementById("countdown").innerHTML = countdown.timeLeft;
        launcher.startGame();
      },
}