import  getRandomWord from './word-pool';
import {boxChange, boxBack, leftRightArrows, buttonCheckAns} from './event-listeners';

const game = document.querySelector('.word');
const box = document.createElement('input');
box.classList.add('box');
box.setAttribute('maxLength', 1);


let word = getRandomWord();

// Generate boxes for each character in word
for (let i = 0; i < word.length; i++){
    game.appendChild(box.cloneNode(true));
}

let boxes = game.childNodes;
let button = document.querySelector('#submit-ans');
console.log(button);
// event listeners from module
boxChange(boxes);
boxBack(boxes);
leftRightArrows(boxes);
buttonCheckAns(button, boxes, word);

// Todo get value if true generate a new word otherwise keep the same
