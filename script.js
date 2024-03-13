
const url = "https://api.nasa.gov/planetary/apod?api_key=bmUw4Wxrg4D5FsZAqpdjlI0AwSmEqAUmhIzBu4hb&count=15"



async function listaImagenes() {
    try{
        let fetchImagen = await fetch(url)
        let datosImagenes = await fetchImagen.json()

        const card = document.querySelector("[data-ul]")

        datosImagenes.forEach( elemento => {
           const contenido = `<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li>`
            card.innerHTML = card.innerHTML + contenido
        })

    }
    catch(error){
        console.log(error)
    }
}

listaImagenes()






/*function listaImagenes (){
    fetch(url)
    .then(response => response.json())
    .then (datosImagen => {
        console.log(datosImagen)

        const card = document.querySelector("[data-ul]")

        datosImagen.forEach( elemento => {
           const contenido = `<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li>`
            card.innerHTML = card.innerHTML + contenido
        })
    })
    .catch( error => console.log(error))
}

listaImagenes()



/*
const solicitud = new Promise((resolve, reject) => {
    const response = "resolve"

    if(response == "resolve"){
        resolve("La promesa se cumplio")
    }
    else {
        reject("La promesa no se cumplio")
    }
})

console.log(solicitud)*/