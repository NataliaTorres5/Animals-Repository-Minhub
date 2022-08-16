let divAnimales = document.querySelector("#cajaAnimales")

function plantilla(objeto) {
    return `
    <div class="cols">
    <div id="${objeto.id}" class="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
            <div class="front">
                <div class="container">
                    <img class=" w-100 h-100" src="${objeto.foto} " alt="">
                </div>
                <div class="inner">
                    <p>${objeto.nombre}</p>
                    <span>${objeto.tipo}</span>
                </div>
            </div>
            <div class="back">
                <div class="inner">
                    <p>${objeto.latin_nombre}</p>
                        <p>${objeto.tiempoDeVidaEnAños}</p>
                        <p>${objeto.active_time}</p>
                        <p>${objeto.habitat}</p>
                        <p>${objeto.diet}</p>
                        <p>${objeto.geo_range}</p>
                </div>
            </div>
        </div>
    </div>
    
</div>
    `
}
plantilla()

console.log(plantilla)

console.log(plantilla)

function impresionEnHtml(cajaAnimales2, objeto) {
    
    let impresion = plantilla(objeto)
    cajaAnimales2.innerHTML += impresion
}
impresionEnHtml (divAnimales, cajaAnimales)
//impresionEnHtml('todos', animal1) //todos es el nombre del div en el html
//impresionEnHtml('todos', animal2)
