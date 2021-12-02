// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            textMyName: 'Ciao, mi chiamo Oussama Echi',
            imageWorld: 'https://www.unc.edu/wp-content/uploads/2020/11/fullsizeglobe-1200x675.jpg'
        },
    }
);