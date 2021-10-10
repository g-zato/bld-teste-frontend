//import createApp from 'vue'
import Vue from 'vue'
//import {mapMutations} from 'vuex'
import App from './App.vue'
//const luxon = require('luxon')


import {store} from './vuex'

Vue.config.productionTip = false
var resp = null

new Vue({
    render: h => h(App),
    store,
    async created() {
        await fetch('https://6050b01f5346090017670430.mockapi.io/api/routes')
        .then(async res => {
            resp = await res.json()
            var dates = await resp.map(data => {
                var d = new Date(data.date)
                var day = ("0" + d.getDate().toString()).slice(-2)
                var month = ("0" + d.getMonth().toString()).slice(-2)
                let dataFormatada = day + "/" + month /*+ "/" + d.getFullYear();*/
                return dataFormatada
            })
            var kmDif = await resp.map(data => data.finalKm - data.initialKm)
            var fines = await resp.map(data => data.finesTotalAmount)
            var kmDifR = []
            var finesR = []
            for(let i = 0; i < kmDif.length; i+=2) {
                var somaKm = kmDif[i] + kmDif[i+1]
                var somaFines = fines[i] + fines[i+1]
                kmDifR.push(somaKm)
                finesR.push(somaFines)
            }
            console.log(kmDifR)
            var totalKm = await kmDifR.reduce((acumulator, value) => {return acumulator+value})
            var totalFines = await fines.reduce((acumulator, value) => {return acumulator+value})

            var data = {
                resp,
                dates,
                kmDif,
                kmDifR,
                fines,
                finesR,
                totalKm,
                totalFines
            }

            this.$store.commit('populateData', data)
            this.$store.commit('dataIsLoaded', true)
            return dates
        })
    }
}).$mount('#app')


