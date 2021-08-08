
const container = document.getElementById('container');
const buttonRefresh = document.getElementById('btn-refresh');
const buttonColor = document.getElementById('btn-color');

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
let latestSquare = 16;

function createGrid(side) {
    latestSquare = side;
    if (typeof side !== 'number') {
        console.log('please return number!');
        return 'ERROR';
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    container.style.gridTemplateColumns = "repeat(" + side + ", " + Math.floor(800/side) + "px)";
    container.style.gridTemplateRows = container.style.gridTemplateColumns;
    side *= side;
    for (let i = 0; i < side; i++) {
        const square = document.createElement('div');

        // calculate vmin
        square.classList.add('square');
        if (buttonColor.classList.contains('color')) {
            square.onmouseover = function() {
                square.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                console.log("Color is now : " + square.style.backgroundColor);
            }
        }
        else {
            square.onmouseover = () => square.classList.add('active');
        }
        container.appendChild(square);
    }
}

buttonRefresh.onclick = function() {    
    let newSide = prompt("Enter number from 4-100");
    newSide = clamp(newSide, 4, 100);
    createGrid(newSide);
}

buttonColor.onclick = function() {
    this.classList.toggle('color');
    createGrid(latestSquare);
    console.log("clicked!");
}

// MAIN
createGrid(latestSquare)