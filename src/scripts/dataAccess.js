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