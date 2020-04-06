const sliderCards = document.querySelectorAll(".main__section--feature-card")
  .length;
const invisibleSliderCards = document.querySelectorAll(
  ".main__section--feature-card.hidden"
).length;
const visibleSliderCards = sliderCards - invisibleSliderCards;

let visibleCardsArr = document.getElementsByClassName(
  "main__section--feature-card"
);
let invisibleCardsArr = document.getElementsByClassName(
  "main__section--feature-car.hidden"
);

// for (i = 0; i < invisibleSliderCards; i++) {

// }
const nextBtn = document.getElementById("slider__button--next");
const prevBtn = document.getElementById("slider__button--previous");

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", previousSlide);

function previousSlide() {
  console.log("previous");
}

function nextSlide() {
  console.log("next");
}
