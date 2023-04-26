const box = document.getElementById('box'); // Denne consten har navnet box og elementet fra styles.css for å få sin form og farge.
// let box = document.querySelector('.box'); // Dette var noe jeg prøvde får å få piltastene til å funke.
let fiende = document.querySelector('.fiende') // dette er let for den andre koben som har en query selector til styles.
const moveBy = 10; // dette er hvos mye jeg ville at boxen skulle bevege seg
// let moveBy = 10; // det samme bare med let isteden for const


// window.addEventListener('load', () => {
//     box.style.left = "200px";
//     box.style.top = "200px";
// });  // dette var for å sjekke om boxen i det hele tatt ville bevege seg.

box.style.left = 0;
box.style.top = 0;

window.addEventListener('keydown', (e) =>{ // dette er da koden jeg bruker for å få til at boxen beveger seg med piltastene jeg startet først med en event listener som skal lytte etter en 'keydown' aka når jeg trykker ned en tast.
    console.log() // Denne er bare for å sjekke om eventen hører et trykk.
    switch(e.key){ // Denne er for å starte koden med at hvis jeg for eksempel trykker på venstre piltast så leser koden switch som får en keyboard event til å skje
        case 'ArrowLeft' :
            box.style.left = parseInt(box.style.left) - moveBy + 'px' // Her har jeg tatt Box fra consten litt før, style for å få til at den skal bevege seg de 10px og left som betyr at boxen når den type knapp har blitt trykker dytter boxen lengre fra ventre eller opp.
            // ParseInt er der for å lage en string om til et tall, så den kalkulerer at box (med css), style (det at den beveger seg 10px) og left/top for hvilken rettning den skal bevege seg. Siden denne spesielle er en left så minuser vi den med moveby siden den skal nærmere venstre top hjørne. og 'px' er bare pixels
            break; // denne er for å stoppe Switch sånn at den ikke bare fortsetter i en ukontrolerbar loop.
        case 'ArrowRight' :    
            box.style.left = parseInt(box.style.left) + moveBy + 'px' 
            break;
        case 'ArrowUp' :    // Case er skallet på selve koden inne i for eksempel ArrowUp.
            box.style.top = parseInt(box.style.top) - moveBy + 'px'
            break;
        case 'ArrowDown' :   
            box.style.top = parseInt(box.style.top) + moveBy + 'px'
            break;
    }
});