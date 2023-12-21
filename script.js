let container = document.querySelector('#container');

for (let i = 0; i < (16 * 16); i++) {
    let div = document.createElement('div');
    div.textContent = 'I AM A DIV';
    div.style.border = 'black solid 1px'
    container.appendChild(div);
};