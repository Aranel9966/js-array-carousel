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


const images = ['https://images2-milano.corriereobjects.it/methode_image/2022/03/14/Milano/Foto%20Milano%20-%20Trattate/Settimio%20Benedusi-kkDH-U3330521700195KQE-656x492@Corriere-Web-Milano.jpg?v=20220314124537',
'https://i0.wp.com/www.giacomocusano.com/wp-content/uploads/2016/07/coastal-wash-web.jpg?fit=1024%2C682&ssl=1',
'https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197__480.jpg',
'https://a-static.besthdwallpaper.com/lighthouse-at-sunset-wallpaper-2048x1536-28429_26.jpg',
]

let arrowTopEl = document.getElementById('arrowTop');
let arrowBotEl = document.getElementById('arrowBot');
let imgEl = document.getElementById('img');
let scrolBarEl = document.getElementById('scrolBar');
let index = 0;

// prendo tutte le img


imgEl.src=images.at(index);

// let select = document.querySelectorAll('.img-scrol')

// select[index].classList.add('active');

// creo evento per le frecce
arrowTopEl.addEventListener('click',function(){

    // diminuisco l'index 
    index--;

    imgEl.src=images.at(index);

    if(-4 == index){
        index=0;
    };
    console.log(index)

    // select[index].classList.add('active');
    // select[index-1].classList.remove('active');

})




arrowBotEl.addEventListener('click',function(){

    // aumento l'index 
    
    index++;
    
    if(index==4){
        index=0;
    }else if(4 <= index){
        index=1
    };

    imgEl.src=images.at(index);

    console.log(index)

    
})


for(let i = 0; i < images.length ; i++){

    let scrolImg = document.createElement('img');

    scrolImg.classList.add('img-scrol');

    scrolBarEl.append(scrolImg);
    
    scrolImg.src=images.at(index);

    index++;

}