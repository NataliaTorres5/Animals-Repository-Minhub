let mayores = document.querySelector('#mayores')
// Definir una función que tome como parámetros el id de una etiqueta html y un array de animales y retorne la impresion de todos los animales.
// - Reutilizar la función anterior
// - Generar una función con for
let arrayDeAnimales2 = [animal1, animal2, animal2, animal1]

function renderizadoConFor(todos, arrayDeAnimales2) {
    for (let i = 0; i < arrayDeAnimales2.length; i++) {
        impresionEnHtml('todos', arrayDeAnimales2[i])}
}
//console.log(arrayDeAnimales2);
renderizadoConFor(todos, arrayDeAnimales2)

// - Generar una función con for in y for of
function renderizadoConForIn (todos, arrayDeAnimales2) {
    for (let animal in arrayDeAnimales2) {
        impresionEnHtml('todos', animal)
    }
    for (let animal of arrayDeAnimales2) {
        impresionEnHtml('todos', arrayDeAnimales2[animal])
    }
}
renderizadoConForIn('todos', arrayDeAnimales2)

// - Generar otra función con map
function renderizadoConMap(){
    let mapeoDeArray = arrayDeAnimales2.map(cadaAnimal => impresionEnHtml(todos, cadaAnimal))
    return mapeoDeArray
}
//renderizadoConMap('todos', arrayDeAnimales2)

// - Probar los resultados con los datos hardcodeados y evaluar las ventajas de cada opción
// Definir una función que tome como parámetros el id de una etiqueta html y un array de productos y retorne la impresion de los productos con fecha de estacionamiento mayor al 2010.
// - Generar una función con for
function filterConFor(todos, arrayDeAnimales2){
    for(let i = 0; i < arrayDeAnimales2.length; i++){
        if(arrayDeAnimales2[i].tiempoDeVidaEnAños > 10){
            impresionEnHtml(todos, arrayDeAnimales2[i])
        }
    }
}
//filterConFor('mayores', arrayDeAnimales2)

// - Generar una función con for in
function filterConForIn(idEnHtml, arrayDeAnimales2){
    for(let animal of arrayDeAnimales2){
        if(animal.tiempoDeVidaEnAños > 10){
            impresionEnHtml(idEnHtml, animal)
        }
    }
    for(let animal in arrayDeAnimales2){
        if(arrayDeAnimales2[animal].tiempoDeVidaEnAños >10){
            impresionEnHtml(idEnHtml, arrayDeAnimales2[animal])
        }
    }
}
//filterConForIn('mayores', arrayDeAnimales2)

// - Generar otra función con filter
function filterConFilter(idEnHtml, arrayDeAnimales2){
    let arrayFiltrado = arrayDeAnimales2.filter(cadaAnimal => cadaAnimal.tiempoDeVidaEnAños > 10)
    renderizadoConForIn(idEnHtml, arrayFiltrado)
}
//filterConFilter('mayores', arrayDeAnimales2)

// - Probar los resultados con los datos hardcodeados y evaluar las ventajas de cada opción
// Subir los archivos a la rama correspondiente de github (git add, git commit, git push), armar la pull request y si no hay conflictos: mergear