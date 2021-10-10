import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: {},
        loaded: false,
        filter: [1, 15]
    },
    mutations: {
        populateData (state, payload) {
            state.data = payload
        },
        changeCardData (state, payload) {
            state.data.totalKm = payload.totalKm
            state.data.totalFines = payload.totalFines
        },
        dataIsLoaded (state, payload) {
            state.loaded = payload
            
        },
        filterUpdate (state, payload) {
            state.filter = payload
            console.dir(state)
        }
    },

})

export { store }