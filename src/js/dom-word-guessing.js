
const game = document.querySelector('.word');
const box = document.createElement('input');
box.classList.add('box');
box.setAttribute('maxLength', 1)

//Todo: Create an array of boxes to save their state and validate

for(let i = 0; i < 8; i++){
    game.appendChild(box.cloneNode());
}
