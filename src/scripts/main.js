import { getPlumbers, usePlumbers } from "./dataAccess.js";
import { newPlumber } from "./newPlumber.js";


const render =()=> {


getPlumbers().then( () => {

    const plumbers = usePlumbers()

    console.log(plumbers)
    const dom = document.querySelector("#main")

    dom.innerHTML = newPlumber()
    dom.innerHTML += plumbers.map( taco => `<div class="plumberList"><h1>${taco.name}</h1></div>`).join("")
})
}

render()

document.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)