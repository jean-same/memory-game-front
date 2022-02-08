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

        .then(function(responseJSON){
            let tableBody = document.querySelector("#tableauBody");
            let scores = '';
            let i = 1;
            let classToUse = ""


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

        const httpHeaders = new Headers();
            httpHeaders.append("Content-Type", "application/json");

        let fetchOptions = {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: httpHeaders,
            body: JSON.stringify(data)
        };

        fetch(ajax.baseUri + "newscore" , fetchOptions)

    },

}