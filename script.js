const container = document.querySelector('#container');
const resizeButton = document.querySelector('#resize-button')
let gridSize = 16;
window.addEventListener("contextmenu", e => e.preventDefault());


resizeButton.addEventListener('click', () => {
    input = prompt('set grid size [max 100]');
    console.log(input);
    if (input === null){
        drawGrid(gridSize);
    } else
    if (input > 100 || input <= 0 || isNaN(input)){
        alert('Please enter a number between 1 and 100')
    } 
    else {
        gridSize = input;
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
        div.style.width = `${itemSize}px`;
        div.style.height = `${itemSize}px`;
        div.classList.add('item');
        container.appendChild(div);
        div.addEventListener('mouseover', (e) => {
            if (e.buttons === 1){
                e.target.style.backgroundColor = 'black';
            } 
            if (e.buttons === 2){
                e.target.style.backgroundColor = 'ghostwhite';
            } 
        })
    };
}

drawGrid(gridSize);
