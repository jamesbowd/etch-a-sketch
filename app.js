const container = document.querySelector(".container");
const reset = document.querySelector(".reset");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.className = "box";
  container.appendChild(div);
}

const boxes = document.querySelectorAll(".box");

for (const box of boxes) {
  box.addEventListener("mouseover", () => {
    box.setAttribute("style", "background-color: #c4946a");
  });
}
