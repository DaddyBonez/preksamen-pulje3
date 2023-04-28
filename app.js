const box = document.querySelector('.box'); 
const border = document.querySelector('.border');
const fiende = document.querySelector('.fiende');
const moveBy = 10;


let t = setInterval(move, 1);
let pos = 1;
let test = true;

///////////////Box bevegelse///////////////

box.style.left = 0;
box.style.top = 0;



window.addEventListener('keydown', (e) =>{ 
    const boxwidth = box.offsetWidth;
    const boxheigth = box.offsetHeigth;
    const windowwidth = window.innerWidth;
    const windowheight = window.innerHeight;
    const currenttop = box.offsetTop
    const currentleft = box.offsetLeft

    console.log() 
    switch(e.key) { 
        case 65: //'ArrowLeft' :
            if (currentleft > boxwidth/2) {
                box.style.left = currentleft - 10 + 'px';
            }
            // box.style.left = parseInt(box.style.left) - moveBy + 'px' 
            // break; 

        case 'ArrowRight' :
            if (currentleft + boxwidth/2 < windowwidth) {
                box.style.left = currentleft + 10 + 'px';
            }
        
            // box.style.left = parseInt(box.style.left) + moveBy + 'px' 
            // break;

        case 'ArrowUp' :
            if (currenttop > boxheigth/2) {
                box.style.top = currenttop - 10 + 'px';
            }
            // box.style.top = parseInt(box.style.top) - moveBy + 'px'
            // break;

        case 'ArrowDown' :
            if (currenttop + boxheigth/2 < windowheight) {
                box.style.top = currenttop + 10 + 'px';
            }
            // box.style.top = parseInt(box.style.top) + moveBy + 'px'
            // break;
            
    }
});

/////////fiende bevegelse///////////

const container = document.getElementById('container');

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
  else if (pos <= 0) 
    test = true;
}




// function move() {
//     fiende.style.left = pos + 'px';
//     fiende.style.top = pos + 'px';


//     if (test)
//         pos++;
//     else
//         test = true;
//     if (pos >= 860)
//         test = false;
//     else if (pos <= 0)
//         test = true;
// };

