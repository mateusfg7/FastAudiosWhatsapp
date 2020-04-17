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

    const allButtons = document.querySelectorAll("button.change-speed");

    buttonMiddle.addEventListener("click", () => {
      for (button of allButtons) {
        button.classList.remove("clicked");
      }
      buttonMiddle.classList.add("clicked");
      const audiosToFast = document.querySelectorAll("audio");
      for (audio of audiosToFast) {
        audio.playbackRate = 1.5;
      }
    });

    buttonSlow.addEventListener("click", () => {
      for (button of allButtons) {
        button.classList.remove("clicked");
      }
      buttonSlow.classList.add("clicked");
      const audiosToSlow = document.querySelectorAll("audio");
      for (audio of audiosToSlow) {
        audio.playbackRate = 1;
      }
    });
  }
}, 1000);
