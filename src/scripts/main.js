import { getPlumbers, usePlumbers } from "./dataAccess.js";

getPlumbers().then( () => {

    const plumbers = usePlumbers()

    console.log(plumbers)

    document.querySelector("#main").innerHTML = plumbers.map( taco => `<h1>${taco.name}</h1>`).join("")
})