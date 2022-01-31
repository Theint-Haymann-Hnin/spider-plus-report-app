export const namespaced = true

export const state = () => {
    return {
        currentreport: null,

    }
}

export const mutations = {
    storeReport(state, payload) {
        state.currentreport = payload
        console.log(state.currentreport) //array
    },
}

export const actions = {

}
export const getters = {

}