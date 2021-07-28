// Get DOM elements
const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const colorChoices = document.querySelectorAll(".colorChoice > button");

// Create 16x16 grid
const drawGrid = (size) => {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            // Lage div
            const div = document.createElement("div");
            container.appendChild(div);
        }
    }
};
drawGrid(16);
// Clears the grid
const clearGrid = () => {
    container.innerHTML = "";
};
let colors = ["black"];
// Choose random color
const chooseRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};
// Eventlister for mouse movement, colors the drawing grid
container.addEventListener("mousemove", (e) => {
    if (e.target.classList[0] === undefined) {
        e.target.style.background = chooseRandomColor();
    }
});
// Clear button
clear.addEventListener("click", () => {
    // Prompts user for a new grid size
    const size = parseInt(prompt("Hva size yu want?"));
    console.log(size);
    if (size > 100) {
        return;
    }
    // Clears the grid
    clearGrid();
    // Create new grid with new size
    drawGrid(size);
});
// Color buttons
for (let i = 0; i < colorChoices.length; i++) {
    const btn = colorChoices[i];
    btn.addEventListener("click", () => {
        if (btn.classList.contains("blossom")) {
            colors = ["#F0BEE6", "#ffb7bf", "#ffeaec", "#ff6b7b"];
        } else if (btn.classList.contains("winter")) {
            colors = ["#42687C", "#84A5B8", "#B3DAF1", "#CBCBCB", "#707571"];
        } else if (btn.classList.contains("autumn")) {
            colors = ["#ffd200", "#9c5708", "#f47b20", "#f79762", "#f05133"];
        } else if (btn.classList.contains("summer")) {
            colors = ["	#ff4e50", "	#fc913a", "	#f9d62e", "	#eae374", "	#e2f4c7"];
        } else if (btn.classList.contains("black")) {
            colors = ["black"];
        }
    });
}

//cursor
const circle = document.getElementById("circle");
const dot = document.getElementById("dot");
let x = 100;
let y = 20;

window.document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    //move the cursor
    circle.style.transform = `translate(${x - circle.offsetWidth / 2}px, ${
        y - circle.offsetHeight / 2
    }px)`;
    dot.style.transform = `translate(${x - dot.offsetWidth / 2}px, ${y - dot.offsetHeight / 2}px)`;
});
