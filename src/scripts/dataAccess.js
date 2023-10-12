
const state = {
    plumbers: [],
    poisons: []
}

const API = "http://localhost:8088"

export const getPlumbers = () => {
    return fetch(`${API}/plumbers`)
    .then( response => response.json())
    .then( returnedResponse => {
        state.plumbers = returnedResponse
    })
}


export const usePlumbers = () => {
    const newState = {...state}

    return newState.plumbers
}
    

export const sendPlumber = (plumberObject) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plumberObject)
    }


    return fetch(`${API}/plumbers`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"));
        })
}















    //Example Fetch Call 
    
    //phase 1 where is the money
    fetch(`http://localhost:8088/poisons`)
    //phase 2 we clean the dirty money 
    .then(dirtyMoney => dirtyMoney.json())
    //phase 3 we spend it
    .then( cleanMoney => {
    
        state.poisons = cleanMoney
        
        console.log(state.poisons)
    })