const container = document.querySelector('#container');
const resizeButton = document.querySelector('#resize-button')
let gridSize = 16;

resizeButton.addEventListener('click', () => {
    gridSize = prompt('set grid size [max 100]');
    console.log(gridSize);
    if (gridSize > 100 || gridSize <= 0 || isNaN(gridSize)){
        alert('ERROR!')
    } else {
        drawGrid(gridSize);
    }
})


function drawGrid(gridSize){
    container.textContent = '';
    let contSize = 400;
    let itemSize = contSize / gridSize; 
    container.style.width = `${contSize}px`;
    container.style.height = `${contSize}px`;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        let div = document.createElement('div');
        div.style.width = `${itemSize - 2}px`;
        div.style.height = `${itemSize - 2}px`;
        div.classList.add('item');
        container.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    };
    
}

drawGrid(gridSize);
