

let mayores = document.querySelector('#mayores')

let animales = [animal1, animal2, animal2, animal1]


function renderizadoConFor(idHTML, array) {
    for (let i = 0; i < array.length; i++) {
        impresionEnHtml(idHTML, array[i])
    }
}
//renderizadoConFor("mayores", animales)

function renderizadoConForIn(idHTML, array) {
    for (let animal of array) {
        impresionEnHtml(idHTML, animal)
    }
    for (let animal in array) {
        impresionEnHtml(idHTML, array[animal])
    }
}
//renderizadoConForIn("mayores", animales)

// ejemplo con for Each -----
function renderizadoConEach(idDelHtml, arrayDeAnimales) {
    arrayDeAnimales.forEach(cadaElemento => impresionEnHtml(idDelHtml, cadaElemento))
}
//renderizadoConEach('mayores',animales)

//----- funcion con map ------

function renderizadoConMap(idDelHtml, arrayDeAnimales) {
    let mapeoDeArray = arrayDeAnimales.map(cadaAnimal => impresionEnHtml(idDelHtml, cadaAnimal))
    return mapeoDeArray
}
renderizadoConMap('mayores', animales)




//-------------------------//

function filterConFor(idDelHtml, arrayDeProductos) {
    for (let i = 0; i < arrayDeProductos.length; i++) {
        if (arrayDeProductos[i].tiempoDeVidaEnAños > 10) {
            impresionEnHtml(idDelHtml, arrayDeProductos[i])
        }
    }
}
//filterConFor('mayores',animales)

function filterConForOf(idDelHtml, arrayDeAnimales) {
    for (let animal of arrayDeAnimales) { //por cada producto del array de productos
        if (animal.tiempoDeVidaEnAños > 10) {
            impresionEnHtml(idDelHtml, animales)
        }
    }
    for (let animal in arrayDeAnimales) { //producto acá es el índice! no el objeto
        if (arrayDeAnimales[animal].tiempoDeVidaEnAños > 10) {
            impresionEnHtml(idDelHtml, arrayDeAnimales[animal])
        }
        console.log(animal)
    }
}
//filterConForOf('mayores',animales) //renderiza 8 animales porque a que filtra 2 veces

function filter(idDelHtml, arrayDeAnimales) {
    let arrayFiltrado = arrayDeAnimales.filter(cadaElemento => cadaElemento.tiempoDeVidaEnAños > 10)
    console.log(arrayFiltrado)
    renderizadoConEach(idDelHtml, arrayFiltrado) //llamo a la funcion anterior, porque tengo que imprimir un array
}
filter('mayores', animales)




