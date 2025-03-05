const grid = document.querySelector(".grid");
let gridChild;
const newGrid = document.querySelector(".new-grid");
const resetButton = document.querySelector(".reset");
let numGrid = 16;
let input;

let cell;

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

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
            child.style.backgroundColor = getRandomColor();
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

resetButton.addEventListener("click", () => {
    gridChild.forEach(child => {
        child.style.backgroundColor = "#BFD7EA";
})
})