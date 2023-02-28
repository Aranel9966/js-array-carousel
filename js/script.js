/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal (ad esempio).
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/

/*
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
*/

/*
-> array di immagini
-> variabili dei bottoni
-> variabili img
-> evento click per spostarsi tra le variabili dell' array top
-> evento click per spostarsi tra le variabili dell' array bot

*/


const images = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp',
]

let arrowTopEl = document.getElementById('arrowTop');
let arrowBotEl = document.getElementById('arrowBot');
let imgEl = document.getElementById('img');
let scrolBarEl = document.getElementById('scrolBar');
let index = 0;

// prendo tutte le img
for(let i = 0; i < images.length ; i++){

    let scrolImg = document.createElement('img');

    scrolImg.classList.add('img-scrol');

    scrolBarEl.append(scrolImg);
    
    scrolImg.src=images[i];

}

imgEl.src=images[index];


const select = document.querySelectorAll(".img-scrol");
select[index].classList.add('active')


// creo evento per le frecce
arrowTopEl.addEventListener('click',function(){
    
    
    // diminuisco l'index 
    select[index].classList.remove('active');

    
    if(index > 0){

        index--;

    }else{
        index=4;
    };

    imgEl.src=images[index];

    select[index].classList.add('active');
    

})


arrowBotEl.addEventListener('click',function(){

    // aumento l'index 
    select[index].classList.remove('active');
    

    if(index < images.length-1){
        index++;

    }else{
        index=0;
    }

    imgEl.src=images[index];

    select[index].classList.add('active');
    
    
})


