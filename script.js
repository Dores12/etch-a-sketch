const grid = document.querySelector(".grid");
const newGrid = document.querySelector(".new-grid");
let numGrid;
let input;

newGrid.addEventListener("click", () => {
    

    do {
        input = prompt("How many rows?");
        if (input === null) return; 

        input = input.trim(); 
        if (input === "") continue; 

        numGrid = Number(input); 
    } while (isNaN(numGrid));

    console.log("Počet riadkov:", numGrid);
});

console.log(numGrid);

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
}