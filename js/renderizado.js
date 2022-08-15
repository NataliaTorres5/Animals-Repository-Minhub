// Definir una función que tome como parámetros el id de una etiqueta html y un array de animales y retorne la impresion de todos los animales.
// - Reutilizar la función anterior
// - Generar una función con for
let arrayDeAnimales2 = [animal1, animal2, animal2, animal1]

function renderizadoConFor(idEnHtml, arrayDeAnimales2) {
    for (let i = 0; i < arrayDeAnimales.length; i++) {
        return impresionEnHtml(idEnHtml, arrayDeAnimales2[i])
        
    }
}
//console.log(arrayDeAnimales2);
renderizadoConFor('todos', arrayDeAnimales2)
// - Generar una función con for in y for of
function renderizadoConForIn (idEnHtml, arrayDeAnimales2) {
    for (let animal in arrayDeAnimales2) {
        impresionEnHtml(idEnHtml, animal)
    }
    for (let animal of arrayDeAnimales2) {
        impresionEnHtml(idEnHtml, arrayDeAnimales2[animal])
    }
}
renderizadoConForIn('todos', arrayDeAnimales2)
// - Generar otra función con map
// - Probar los resultados con los datos hardcodeados y evaluar las ventajas de cada opción
// Definir una función que tome como parámetros el id de una etiqueta html y un array de productos y retorne la impresion de los productos con fecha de estacionamiento mayor al 2010.
// - Generar una función con for
// - Generar una función con for in
// - Generar otra función con filter
// - Probar los resultados con los datos hardcodeados y evaluar las ventajas de cada opción
// Subir los archivos a la rama correspondiente de github (git add, git commit, git push), armar la pull request y si no hay conflictos: mergear