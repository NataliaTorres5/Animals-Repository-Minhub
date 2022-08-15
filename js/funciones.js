let animal1 = {
    id:131,
    nombre: "Pallas Cat",
    tipo:"Mammal",
    foto:"https://upload.wikimedia.org/wikipedia/commons/d/d6/Manoel.jpg",
    tiempoDeVidaEnAños:"8",
    latin_name:"Octocolobus manul",
    active_time:"Nocturnal",
    length_min:"1.5",
    length_max:"2",
    weight_min:"6.5",
    weight_max:"11",
    habitat:"Mountain regions, including grassland, woodland, and semi-desert",
    diet:"Pikas, hares, and small rodents such as gerbils, voles, and young marmots",
    geo_range:"Central Asia",
    
    
}

let animal2 = {
    id:149,
    nombre:"Red-eared Slider",
    foto:"https://upload.wikimedia.org/wikipedia/commons/9/96/RedEaredSlider05.jpg",
    tipo:"Reptile",
    tiempoDeVidaEnAños:"20",
    latin_name:"Trachemys scripta elegans",
    active_time:"Diurnal",
    length_min:"0.42",
    length_max:"0.92",
    weight_min:"1.5",
    weight_max:"2",
    habitat:"Freshwater ponds and streams",
    diet:"Fish, mollusks, and insects",
    geo_range:"Southern and Midwestern United States",
    
    
}



function plantillaAnimales(objeto) {
    let nombreCorrecto = objeto.nombre.charAt(0).toUpperCase()+objeto.nombre.slice(1).toLowerCase()
    let tipoAnimal = objeto.tipo.charAt(0).toUpperCase()+objeto.tipo.slice(1).toLowerCase()
    return`
            <div id=${objeto.id} class='datos card'>
            <p> foto:<img class="card-img-top" src="${objeto.foto} " alt="#"> </p>
            <p>Nombre: <b>${nombreCorrecto}</b></p>
            <p>Tipo: <b>${tipoAnimal}</b></p>
            <p>Tiempo de Vida: <b>${objeto.tiempoDeVidaEnAños} </b></p>
            </div>
    `

}
let plantilla = plantillaAnimales(animal1)
//console.log(plantilla)

function impresionEnHtml(idEnHtml, objeto) {
    let impresion = plantillaAnimales (objeto)
    let contenedor = document.getElementById(`${idEnHtml}`)
    contenedor.innerHTML += impresion
    //document.querySelector(`#${id}`).innerHTML = plantillaAnimales(objeto) // codigo mas corto para hacer la impresion.
}
impresionEnHtml ('todos',animal1) //todos es el nombre del div en el html
impresionEnHtml ('todos',animal2)