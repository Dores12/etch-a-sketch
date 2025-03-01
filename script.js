const grid = document.querySelector(".grid");
const newGrid = document.querySelector(".new-grid");
let numGrid = 64;
let input;

let cell;

for (let i = 0; i < numGrid * numGrid; i++) {
  cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
  cell.style.width = (100 / numGrid) + "%";
  cell.style.height = (100 / numGrid) + "%";
  
}

newGrid.addEventListener("click", () => {
    grid.innerHTML = "";

    do {
        input = prompt("How many rows?");
        if (input === null) return; 

        input = input.trim(); 
        if (input === "") continue; 

        numGrid = Number(input); 
    } while (isNaN(numGrid));

    console.log("Počet riadkov:", numGrid);
    for (let i = 0; i < numGrid * numGrid; i++) {
        cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
        cell.style.width = (100 / numGrid) + "%";
        cell.style.height = (100 / numGrid) + "%";
        
      }
});

