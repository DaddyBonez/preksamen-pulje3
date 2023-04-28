const box = document.querySelector('.box'); 
const border = document.querySelector('.border');
const moveBy = 10;



///////////////Box bevegelse///////////////

box.style.left = 0;
box.style.top = 0;



window.addEventListener('keydown', (e) =>{ 
        console.log() 
    switch(e.key) { 
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

/////////fiende bevegelse///////////

const container = document.getElementById('container');
const fiende = document.querySelector('.fiende');
let t = setInterval(move, 1);
let pos = 1;
let test = true;


function move() {
  fiende.style.left = pos + 'px';
  fiende.style.top = pos + 'px';
  
  if (test)
    pos++; /* move down */
  else
    pos--; /* move up */
    
  /* update the direction when you reach the top or bottom limit*/  
  if (pos >= innerHeight) 
    test = false 
  else if (pos <= 1) 
    test = true;
}
