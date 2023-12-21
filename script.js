const container = document.querySelector('#container');
const resizeButton = document.querySelector('#resize-button')
let gridSize = 16;

// resizeButton.addEventListener('click', () => {
//     gridSize = prompt('set grid size');
//     drawGrid(gridSize);
// })


function drawGrid(gridSize){
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let div = document.createElement('div');
        // div.textContent = i;
        div.classList.add('item');
        container.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    };
    
}

drawGrid(gridSize);
