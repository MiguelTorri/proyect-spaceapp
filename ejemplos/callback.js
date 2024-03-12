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