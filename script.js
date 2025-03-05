const grid = document.querySelector(".grid");
let gridChild;
const newGrid = document.querySelector(".new-grid");
const resetButton = document.querySelector(".reset");
let numGrid = 16;
let input;

let cell;

function createGrid(numGrid) {
    grid.innerHTML = "";

    for (let i = 0; i < numGrid * numGrid; i++) {
        cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
        cell.style.width = (100 / numGrid) + "%";
        cell.style.height = (100 / numGrid) + "%";
        gridChild = document.querySelectorAll(".cell"); 
      }

      gridChild.forEach(child => {
        child.addEventListener("mouseover", () => {
            child.classList.add("hovered");
        })
      });
    
}


createGrid(numGrid);

newGrid.addEventListener("click", () => {

    do {
        input = prompt("How many rows?");
        if (input === null) return; 

        input = input.trim(); 
        if (input === "") continue; 

        numGrid = Number(input); 
    } while (isNaN(numGrid));

    createGrid(numGrid);
});

