import { sendPlumber } from "./dataAccess.js"


export const newPlumber = () => {
    let html = `
    <section id="plumberForm">
        <div class="field">
            <label class="label" for="plumberName">Full Name</label>
            <input type="text" name="name" class="input" placeholder="add name here..." />
        </div>
     

        <button class="button" id="submitRequest">Add plumber</button>
    </section>
    `

    return html
}


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("input[name='name']").value



        // Make an object out of the user input
        const dataToSendToAPI = {
            name: userName
        }

        // Send the data to the API for permanent storage
         sendPlumber(dataToSendToAPI)
    }
})























{/* <div class="field">
<label class="label" for="serviceAddress">Address</label>
<input type="text" name="serviceAddress" class="input" />
</div>
<div class="field">
<label class="label" for="serviceBudget">Budget</label>
<input type="number" name="serviceBudget" class="input" />
</div>
<div class="field">
<label class="label" for="serviceDate">Date needed</label>
<input type="date" name="serviceDate" class="input" />
</div> */}