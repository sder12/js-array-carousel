// MILESTONE 2
//INSERIRE IMG IN MODO DINAMICO JS
//creare array con immagini
//creare elemento con template literal (.innerHTML)
//dare la classe active solo alla prima img

const sliderImg = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

// Prelevare da HTML
const slider = document.querySelector(".slider");
console.log(sliderImg);
console.log(slider);

//creare div img
for (let i = 0; i < sliderImg.length; i++) {
  const thisImg = sliderImg[i];
  console.log(thisImg);
  slider.innerHTML += `<div class="image">
                            <img src="${thisImg}" alt="">
                    </div>`;
}

//dare active
const imgDiv = document.getElementsByClassName("image");
console.log(imgDiv);
//NB uso elements by class name perchè prendo tutti i div
let sliderPosition = 0;
imgDiv[sliderPosition].classList.add("active");
console.log(sliderPosition);

// MILESTONE 3
// Al click sul bottone eventListener
// la classe active si cancella dall'img precedente
// la classe active si aggiunge alla nuova img IN SUCESSIONE++
// BONUS 1: ciclo infinito del carosello.

//Btn const
const prevUp = document.querySelector(".prev");
const nextDown = document.querySelector(".next");
console.log(prevUp, nextDown);

nextDown.addEventListener("click", function () {
  if (sliderPosition < imgDiv.length - 1) {
    //rimuovo active
    imgDiv[sliderPosition].classList.remove("active");
    // assegno active a img dopo
    sliderPosition++;
    imgDiv[sliderPosition].classList.add("active");
    //bloccare l'aumento di slider position
  } else {
    imgDiv[sliderPosition].classList.remove("active");
    sliderPosition = 0;
    imgDiv[sliderPosition].classList.add("active");
  }
});

prevUp.addEventListener("click", function () {
  if (sliderPosition > 0 && sliderPosition <= imgDiv.length - 1) {
    //rimuovo active
    imgDiv[sliderPosition].classList.remove("active");
    // assegno active a img dopo
    sliderPosition--;
    imgDiv[sliderPosition].classList.add("active");
    //bloccare l'aumento di slider position
  } else {
    imgDiv[sliderPosition].classList.remove("active");
    sliderPosition = imgDiv.length - 1;
    imgDiv[sliderPosition].classList.add("active");
  }
});

//-----------------------------------------------------------
// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails
// sulla destra dell’immagine grande attiva, come nello screenshot
// proposto. Tutte le miniature avranno un layer di opacità scura,
// tranne quella corrispondente all’immagine attiva, che invece
// avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva,
// gestire il cambio di miniatura attiva.
