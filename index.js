const section = document.querySelector("._3Kxus").children[0];

const buttonSlow = document.createElement("button");
section.appendChild(buttonSlow);
buttonSlow.innerHTML = ">";

const buttonFast = document.createElement("button");
section.appendChild(buttonFast);
buttonFast.innerHTML = ">>";

buttonFast.addEventListener("click", () => {
  const audiosToFast = document.querySelectorAll("audio");
  for (audio of audiosToFast) {
    audio.playbackRate = 2;
  }
});

buttonSlow.addEventListener("click", () => {
  const audiosToSlow = document.querySelectorAll("audio");
  for (audio of audiosToSlow) {
    audio.playbackRate = 1;
  }
});
