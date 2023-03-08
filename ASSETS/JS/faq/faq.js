const part = document.querySelectorAll(".part");
const span = document.querySelector("span");
const part1Fall = document.querySelector(".part1Fall");
const part2Fall = document.querySelector(".part2Fall");
const part3Fall = document.querySelector(".part3Fall");
const part4Fall = document.querySelector(".part4Fall");
const part1 = document.querySelector("#part1");
const part2 = document.querySelector("#part2");
const part3 = document.querySelector("#part3");
const part4 = document.querySelector("#part4");

part.forEach((x) => {
  x.addEventListener("click", (xy) => {
    xy.currentTarget.classList.toggle("move-right");
  });
});

span.addEventListener("click", () => {
  part.classList.toggle("move-right");
});

function showText(name) {
  if (name.style.display === "block") {
    name.style.display = "none";
  } else {
    name.style.display = "block";
  }
}

part1.addEventListener("transitionend", () => showText(part1Fall));
part2.addEventListener("transitionstart", () => showText(part2Fall));
part3.addEventListener("transitionstart", () => showText(part3Fall));
part4.addEventListener("transitionstart", () => showText(part4Fall));
