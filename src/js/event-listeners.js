export function boxChange(boxes){
    boxes.forEach(element => {
        element.addEventListener('input', (event) =>{
            let box = event.currentTarget;
            if (box.value.length !== 0){
                const nextBox = box.nextElementSibling;
                if(nextBox){ nextBox.focus() }
            }
        })
    });
}


export function boxBack(boxes){

    boxes.forEach(element => {
        element.addEventListener('keydown', (event) =>{
            let box = event.currentTarget;
            let previous = box.previousElementSibling;
            if (previous && event.key === 'Backspace') { 
                box.value = '';
                previous.focus();
                event.preventDefault(); // prevent the default action of the Backspace key
            }

        })
    })

}


export function leftRightArrows(boxes){
    boxes.forEach(element => {
        element.addEventListener('keydown', (event) => {
            let previousElement = event.currentTarget.previousElementSibling;
            let nextElement = event.currentTarget.nextElementSibling;
                if (previousElement && event.key === 'ArrowLeft'){
                    previousElement.focus();
                    event.preventDefault();
                }
                
                if (nextElement && event.key === 'ArrowRight'){
                    nextElement.focus();
                    event.preventDefault();
                }
        });
    });
}


export function buttonCheckAns(button, boxes, ans){
    button.addEventListener('submit', (event) =>{
        let text = "";
        for (let i = 0; i < boxes.length; i++) text += boxes[i].value;
        
    
    
        for(let i = 0; i < boxes.length; i++){
            if (boxes[i].value !== ans[i]){
                boxes[i].classList.add('wrong');
            }else{
                boxes[i].classList.add('right');
            }
        }
  
        event.preventDefault();
        
    }), true
}

