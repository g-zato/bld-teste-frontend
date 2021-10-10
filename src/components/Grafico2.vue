<template>
    <TrendChart
  :datasets="[
    {
      data:chartData.slice(this.$store.state.filter[0], this.$store.state.filter[1]),
      smooth: true,
      fill: true,
      showPoints: true
    }
  ]"
  :grid="{
     verticalLines: false,
     horizontalLines: true
  }"
  :labels="{
     xLabels: chartInfo.slice(this.$store.state.filter[0], this.$store.state.filter[1]),
     yLabels: 10,
     yLabelsTextFormatter: val => Math.round(val)

  }"
  :min="0"
>
</TrendChart>
</template>


<script>

import Vue from 'vue'
import TrendChart from 'vue-trend-chart'
import {store} from '../vuex'
Vue.use(TrendChart)

export default {  
    name: 'Grafico2',
    data() {
          return {
              chartData: store.state.data.finesR,
              chartInfo: [...new Set(store.state.data.dates)]
        }
      }
      
    
}
</script>

<style scoped>
.vtc {
     font-size: 10px;
     fill:#1c6894; 
 }
</style>
