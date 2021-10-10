<template>
    <div class="app-content">
    <vue-range-slider min-range="2" v-model="value" :min="min" :max="max" :formatter="formatter" ></vue-range-slider>
  </div>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
    name: 'Slider',
    data() {
    return {
      value: [1, 15]
    }
  },
  components: {
    VueRangeSlider
  },
  created() {
    this.min = 1
    this.max = 15
    this.formatter = value => `dia ${value}`
    this.minrange = 2
  },
  watch: {
      async value(val) {
          this.$store.commit('filterUpdate', val)
          var totalKm = await this.$store.state.data.kmDifR.slice((this.$store.state.filter[0] -1), this.$store.state.filter[1]).reduce((acumulator, value) => {return acumulator+value})
          var totalFines = await this.$store.state.data.finesR.slice((this.$store.state.filter[0]), this.$store.state.filter[1]).reduce((acumulator, value) => {return acumulator+value})
          var update = {
              totalKm,
              totalFines
          }
          this.$store.commit('changeCardData', update)
      }
  }
}
</script>

<style scoped>
.app-content {
  padding: 15px;
}
</style>
