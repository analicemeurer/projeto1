const audio = document.querySelector("audio");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");

// Evento de reprodução
playButton.addEventListener("click", () => {
  audio.play();
});

// Evento de pausa
pauseButton.addEventListener("click", () => {
  audio.pause();
});

// Evento de avanço
nextButton.addEventListener("click", () => {
  audio.currentTime += 10;
});

// Evento de volta
previousButton.addEventListener("click", () => {
  audio.currentTime -= 10;
});

