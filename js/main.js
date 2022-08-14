let URL_API = "https://zoo-animal-api.herokuapp.com/animals/rand/10"
let data;
async function getAnimals(){
    await fetch(URL_API)
    .then(res => res.json())
    .then(json => data = json)

    console.log(data);
}
getAnimals()

