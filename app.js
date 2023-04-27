const box = document.querySelector('.box'); 
const border = document.querySelector('.border');
const fiende = document.querySelector('.fiende') ;
const moveBy = 10;
let t = setInterval(move, 1);
let pos = 1;
let test = true;

box.style.left = 0;
box.style.top = 0;

window.addEventListener('keydown', (e) =>{ 
    console.log() 
    switch(e.key){ 
        case 'ArrowLeft' :
            box.style.left = parseInt(box.style.left) - moveBy + 'px' 
            break; 
        case 'ArrowRight' :    
            box.style.left = parseInt(box.style.left) + moveBy + 'px' 
            break;
        case 'ArrowUp' : 
            box.style.top = parseInt(box.style.top) - moveBy + 'px'
            break;
        case 'ArrowDown' :   
            box.style.top = parseInt(box.style.top) + moveBy + 'px'
            break;
    }
});

function move() {
    fiende.style.left = pos + 'px';
    fiende.style.top = pos + 'px';

    if (test)
        pos++;
    else
        test = true;

    if (pos >= 150)
        test = false;
    else if (pos <= 0)
        test = true;
};