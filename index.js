function checkedButton(allButtons, mainButton) {
  for (button of allButtons) {
    button.classList.remove("clicked");
  }
  mainButton.classList.add("clicked");
}

function changeSpeed(speed) {
  const audios = document.querySelectorAll("audio");

  const methods = {
    slow() {
      for (audio of audios) {
        audio.playbackRate = 1;
      }
    },
    middle() {
      for (audio of audios) {
        audio.playbackRate = 1.5;
      }
    },
    fast() {
      for (audio of audios) {
        audio.playbackRate = 2;
      }
    },
  };
  methods[speed]();
}

const interval = setInterval(() => {
  const section = document.querySelector("._3Kxus").children[0];
  if (section) {
    clearInterval(interval);

    const buttonSlow = document.createElement("button");
    buttonSlow.innerHTML = "1x";
    buttonSlow.classList.add("change-speed");
    buttonSlow.classList.add("clicked");
    section.appendChild(buttonSlow);

    const buttonMiddle = document.createElement("button");
    buttonMiddle.innerHTML = "1.5x";
    buttonMiddle.classList.add("change-speed");
    section.appendChild(buttonMiddle);

    const buttonFast = document.createElement("button");
    buttonFast.innerHTML = "2x";
    buttonFast.classList.add("change-speed");
    section.appendChild(buttonFast);

    const allButtons = document.querySelectorAll("button.change-speed");

    buttonSlow.addEventListener("click", () => {
      checkedButton(allButtons, buttonSlow);
      changeSpeed("slow");
    });
    buttonMiddle.addEventListener("click", () => {
      checkedButton(allButtons, buttonMiddle);
      changeSpeed("middle");
    });
    buttonFast.addEventListener("click", () => {
      checkedButton(allButtons, buttonFast);
      changeSpeed("fast");
    });
  }
}, 1000);
