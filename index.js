const section = document.querySelector("._3Kxus").children[0];

const buttonSlow = document.createElement("button");
buttonSlow.innerHTML = ">";
buttonSlow.classList.add("change-speed");
section.appendChild(buttonSlow);

const buttonFast = document.createElement("button");
buttonFast.innerHTML = ">>";
buttonFast.classList.add("change-speed");
section.appendChild(buttonFast);

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
