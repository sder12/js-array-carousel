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
//Btn const
const prevUp = document.querySelector(".prev");
const nextDown = document.querySelector(".next");
console.log(prevUp, nextDown);

//creare div img
for (let i = 0; i < sliderImg.length; i++) {
  const thisImg = sliderImg[i];
  console.log(thisImg);
  slider.innerHTML += `<div class="image">
                            <img src="${thisImg}" alt="">
                    </div>`;
}

const imgDiv = document.querySelector(".image");
console.log(imgDiv);
imgDiv.classList.add("active")