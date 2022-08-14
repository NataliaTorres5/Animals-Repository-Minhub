// Pedir con PROMPT la cantidad de productos a cargar.
// - Guardar la cantidad en una variable.
// - Utilizar la estructura de while para condicionar las respuestas no validas (menor a 0 o letras/signos).
let cantidad = -1
while (cantidad<0 || isNaN(cantidad)) {
    cantidad = parseInt(prompt('Ingrese la cantidad de animales para agregar a la base de datos:'))
    console.log(cantidad);
}
let arrayDeAnimales = []

if (cantidad>0) {
    for (let i = 1; i <= cantidad; i++) {
        let nombre = ''
        while (nombre.length<2) {
            nombre = prompt('Ingrese el nombre de animal ' + i + ':')
            console.log(nombre);
        }
        let tipo = ''
        while (tipo.length<2) {
            tipo = prompt('Ingrese el tipo del animal ' + nombre +':')
            console.log(tipo);
        }
        let foto = ''
        while (foto<2) {
            foto = prompt('Ingrese la foto del animal ' + nombre + ' tipo ' + tipo + ':')
            console.log(foto);
        }
        let tiempoDeVidaEnAños = ''
        while (isNaN(tiempoDeVidaEnAños) || tiempoDeVidaEnAños>1) {
            tiempoDeVidaEnAños = prompt('Ingrese el tiempo de vida del animal' + nombre + ' tipo ' + tipo + ' de foto ' + foto + ':')
            console.log(tiempoDeVidaEnAños);
        }
        let animal = {// - Guardar los datos en un objeto.
            nombre: nombre,
            tipo: tipo,
            foto: foto,
            tiempoDeVidaEnAños: tiempoDeVidaEnAños
        }
        animal.id = parseInt(Math.random()*100000) // - Agregar al objeto una propiedad id con alguna cuenta random para su cálculo.
        console.log(animal);
        arrayDeAnimales.push(animal) // - Agrega el objeto al array que estamos construyendo con todos los productos.
    }

    
}
console.log(arrayDeAnimales);// Mostrar en consola los vinos creados.

// Subir los archivos a la rama correspondiente de github (git add, git commit, git push), armar la pull request y si no hay conflictos: mergear