const app = {

    init: () => {
        console.log('init');
        launcher.init();
        cardsState.init();
        ajax.init();
      },



}

document.addEventListener('DOMContentLoaded', app.init); 