export const namespaced = true

export const state = () => {
    return {
        currentreport: null,
        eveningreport: null,
        morningreport: null,
        fetchdata: null,

    }
}

export const mutations = {
    storeReport(state, payload) {
        state.currentreport = payload
        console.log(state.currentreport)
    },

    storeEveningReport(state, payload) {
        state.eveningreport = payload
    },

    storeMorningReport(state, payload) {
        state.morningreport = payload
    },
    
    fetchData(state, payload) {
        state.fetchdata = payload
        console.log('fetchdata  in state', state.fetchdata)
    },
}

export const actions = {

}
export const getters = {

}