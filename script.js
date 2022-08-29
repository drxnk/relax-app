const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 12000;
const breatheTime = (totalTime / 6) * 2;
const holdTime = totalTime / 6;

breatheAnimation();

function breatheAnimation() {
  text.innerHTML = "Inspire";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Segure";

    setTimeout(() => {
      text.innerText = "Expire";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);
