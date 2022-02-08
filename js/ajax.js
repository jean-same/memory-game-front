const ajax = {

    baseUri : "http://localhost:8001/",

    fetchOptions: {

        method: 'GET',

        mode: 'cors',
        // Veut-on que la réponse puisse être mise en cache par le navigateur ?
        // Non durant le développement, oui en production.
        cache: 'no-cache'
    },


    init : function() {
        console.log("AJAX");
        ajax.findTopTen();
    },

    findTopTen : function() {
        fetch(ajax.baseUri + "topTen", ajax.fetchOptions )

        .then(function(response) {
            return response.json()
        })
        // Je recupere le resultat en format JSON
        .then(function(responseJSON){
            // Je recupere le tableau grace à son ID
            let tableBody = document.querySelector("#tableauBody");
            let scores = '';
            let i = 1;
            let classToUse = ""

            /**
             * Pour chaque score recupéré en seconde, je fais un calcul pour avoir le temps exact que l'utilisateur avait mis pour gagner
             * Je remplis la variable classToUse en fonction de la valeur de i
             * Ensuite je rajoute les tr pre-rempli dans la variable score
             * Et pour finir, je rajoute cette variable score dans le tableau
             */

            for(let currentScore of responseJSON) {
                let timeUsed = countdown.fixedSecs - currentScore.nbSeconds;
                i <= 3 ? classToUse = "top-pos" : classToUse = "mid-pos";
                i > 7 ? classToUse = "bot-pos" : "" ;
                scores += `
                <tr class=" ${ classToUse} ">
                    <td> ${i}  </td>
                    <td> ${utils.formatSecsInMinutes(timeUsed) }  </td>
                    <td> ${utils.formatDate(currentScore.date) }  </td>
                </tr>
                `

                tableBody.innerHTML = scores;
                i++;
            }
        } )

    },

    addNewScore : () => {
        const data = {
            "nbSeconds" : countdown.timeInSecs
        };

        // Je prépare les entêtes HTTP (headers) de la requête
        // afin de spécifier que les données sont en JSON
        const httpHeaders = new Headers();
            httpHeaders.append("Content-Type", "application/json");

        let fetchOptions = {
            // c'est une création donc j'utilise POST
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            // J'ajoute les headers dans les options
            headers: httpHeaders,
            // J'ajoute les données, encodées en JSON, dans le corps de la requête
            body: JSON.stringify(data)
        };

        fetch(ajax.baseUri + "newscore" , fetchOptions)

    },


}