const section = document.querySelector("._3Kxus").children[0];

const buttonSlow = document.createElement("button");
buttonSlow.innerHTML = "1x";
buttonSlow.classList.add("change-speed");
section.appendChild(buttonSlow);

const buttonMiddle = document.createElement("button");
buttonMiddle.innerHTML = "1.5x";
buttonMiddle.classList.add("change-speed");
section.appendChild(buttonMiddle);

buttonMiddle.addEventListener("click", () => {
  const audiosToFast = document.querySelectorAll("audio");
  for (audio of audiosToFast) {
    audio.playbackRate = 1.5;
  }
});

buttonSlow.addEventListener("click", () => {
  const audiosToSlow = document.querySelectorAll("audio");
  for (audio of audiosToSlow) {
    audio.playbackRate = 1;
  }
});
