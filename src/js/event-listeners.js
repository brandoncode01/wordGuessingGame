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

