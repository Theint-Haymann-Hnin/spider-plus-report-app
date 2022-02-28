export const namespaced = true

export const state = () => {
    return {
        currentreport: null,
        eveningreport: null,
        morningreport: null,

    }
}

export const mutations = {
    storeReport(state, payload) {
        state.currentreport = payload
        console.log(state.currentreport) //array
    },
    
    storeEveningReport(state, payload) {
        state.eveningreport = payload
        console.log('evening report in state',state.eveningreport) 
    },
    
    storeMorningReport(state, payload) {
        state.morningreport = payload
    },
}

export const actions = {

}
export const getters = {

}