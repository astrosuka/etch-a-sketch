let container = document.querySelector('#container');

for (let i = 0; i < (16 * 16); i++) {
    let div = document.createElement('div');
    // div.textContent = i;
    div.classList.add('item');
    container.appendChild(div);
};