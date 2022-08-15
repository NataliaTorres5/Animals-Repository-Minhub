

function plantillaAnimales(objeto) {
    let nombreCorrecto = objeto.nombre

    return `
            <div id=${objeto.id} class='datos card'>
            <p> foto:<img class="card-img-top" src="${objeto.foto} " alt="#"> </p>
            <p>Nombre: <b>${nombreCorrecto}</b></p>
            <p>Tipo: <b>${objeto.tipo}</b></p>
            <p>Tiempo de Vida: <b>${objeto.tiempoDeVidaEnAños} </b></p>
            </div>
    `
}
let plantilla = plantillaAnimales(animal1)

console.log(plantilla)

function impresionEnHtml(idEnHtml, objeto) {
    let impresion = plantillaAnimales(objeto)
    let contenedor = document.getElementById(`${idEnHtml}`)
    contenedor.innerHTML += impresion
    // let container = document.getElementById(idEnHtml).innerHTML += plantillaAnimales(objeto) // codigo mas corto para hacer la impresion.
}
//impresionEnHtml('todos', animal1) //todos es el nombre del div en el html
//impresionEnHtml('todos', animal2)
