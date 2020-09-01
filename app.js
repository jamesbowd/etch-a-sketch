const container = document.querySelector(".container");
const reset = document.querySelector(".reset");

const createGrid = (numberOfSquaresPerRow) => {
  for (let i = 0; i < numberOfSquaresPerRow * numberOfSquaresPerRow; i++) {
    const div = document.createElement("div");
    div.className = "box";
    const boxWidth = 640 / numberOfSquaresPerRow;
    div.style.width = boxWidth + "px";
    div.style.height = boxWidth + "px";
    container.appendChild(div);
  }
};

const startDrawing = () => {
  const boxes = document.querySelectorAll(".box");

  for (const box of boxes) {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "#c4946a";
      console.log("mouseover");
    });
  }
};

createGrid(16);
startDrawing();

reset.addEventListener("click", () => {
  container.innerHTML = "";
  const numberOfSquaresPerRow = prompt("Number of squares?");
  createGrid(numberOfSquaresPerRow);
  startDrawing();
});
