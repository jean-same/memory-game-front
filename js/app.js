const app = {

    init: () => {
        console.log('init');
        launcher.init();
        cardsState.init();
      },



}

document.addEventListener('DOMContentLoaded', app.init); 