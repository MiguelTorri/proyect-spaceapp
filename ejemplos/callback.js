function uno (dos) {
    console.log("uno")
    setTimeout(dos, 2000)
}

function dos () {
    console.log("dos")
}

setTimeout(() => uno(dos), 5000)


const nombre = function () {  /*<--- esto es una funcion anonima*/
    console.log("nombre")
}
nombre()

const persona = () => console.log("barbara") /*<-- esto es una aerofuntion*/
persona ();

() => console.log() /*<-- otra forma de hacer un aerofuntion */


/* en caso de hacer un callback hell seria asi
function uno(dos) {
    console.log("uno")
    setTimeout(dos, 2000)
}

function dos(tres) {
    console.log("dos")
    setTimeout(tres, 2000)
}

function tres(cuatro) {
    console.log("tres")
    setTimeout(cuatro, 2000)
}

function cuatro(cinco) {
    console.log("cuatro")
    setTimeout(cinco, 2000)
}

//calllback hell
setTimeout(() => uno(
    () => dos(
        () => tres(
            () => cuatro(
                () => cinco(),)))), 3000)  */