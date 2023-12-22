const container = document.querySelector('#container');
const resizeButton = document.querySelector('#resize-button');
const colorButton = document.querySelector('#color-button');
const clearButton = document.querySelector('#clear-button');
let gridSize = 16;
let colorSwitch = 0;
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

colorButton.addEventListener('click', () => {
    if (colorSwitch === 0){
        colorSwitch = 1;
        colorButton.style.color = getRandomColor();
    } else {
        colorSwitch = 0;
        colorButton.style.color = 'black';
    }
})

clearButton.addEventListener('click', () => {
    drawGrid(gridSize);
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
                e.target.style.backgroundColor = colorSwitch ? getRandomColor() : 'black';
            } 
            if (e.buttons === 2){
                e.target.style.backgroundColor = 'ghostwhite';
            } 
        })
    };
}

function getRandomColor(){
    let randR = Math.floor(Math.random()*255);
    let randG = Math.floor(Math.random()*255);
    let randB = Math.floor(Math.random()*255);
    return `RGB(${randR},${randG},${randB})`

}

drawGrid(gridSize);
