const alert = {

    restartAlert : () => {
        return result = new jBox('Notice', {
            content: 'Jeu redemarrer',
            color: 'yellow',
            autoClose: 2000
          });
    },

    restartConfirmation : () => {
        return result =  Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Game restarted ',
            showConfirmButton: false,
            timer: 1000
        })
    },

    victory : (timeLeft) => {
        return result = Swal.fire(
            'Congratulations 🎉🎉🎉 !',
            'You won that game with ' + timeLeft + ' time left 💪💪',
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