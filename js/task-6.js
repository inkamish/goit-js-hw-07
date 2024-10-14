function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  boxes.innerHTML = "";

  if (amount > 0 && amount <= 100) {
    const boxElements = [];

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxElements.push(box);
    }
    boxes.append(...boxElements);
  }
});

destroyButton.addEventListener("click", () => {
  boxes.innerHTML = "";
  input.value = "";
});
