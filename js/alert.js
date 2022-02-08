const alert = {

    // J'ai utilisé 2 librairies pour gerer les alerts
    // https://sweetalert2.github.io/
    // https://stephanwagner.me/jBox

    restartAlert : () => {
        return result = new jBox('Notice', {
            content: 'Jeu redemarrer',
            color: 'yellow',
            autoClose: 2000
          });
    },

    victory : (timeLeft , bestScoreString = "") => {
        return result = Swal.fire(
            'Felicitations 🎉🎉🎉 !',
            'Vous avez gagné cette partie avec ' + timeLeft + ' minutes restante 💪💪 <br> ' + bestScoreString,
            'success'
          )
    },

    gameOver: () => {
        return result = Swal.fire({
            icon: 'error',
            title: "Time's up...",
            text: 'Game over 😒😒😒😒!',
            showCloseButton: true
        })
    },

    
}