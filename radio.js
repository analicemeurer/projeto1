const audio = document.querySelector("audio");

audio.addEventListener("play", () => {
  console.log("A música está tocando.");
});

audio.addEventListener("pause", () => {
  console.log("A música está pausada.");
});

audio.addEventListener("ended", () => {
  console.log("A música terminou.");
});
