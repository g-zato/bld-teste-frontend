<template>
   <div class="content-container">
    <div class="content-left">
      <div class="card top">
        <h4 class="card-title">Selecione um período:</h4>
        <div class="filter-container">
          <h4></h4>
          <Slider/>
        </div>
        <div class="card-line">
          <p class="card-txt">Total de km rodados:</p>
          <p class="card-data" v-if="loaded">{{card.totalKm}} km</p>
        </div>
        <div class="card-line last">
          <p class="card-txt">Total em multas:</p>
          <p class="card-data" v-if="loaded">R$ {{card.totalFines}}</p>
        </div>
      </div>
    </div>
    <div class="container-right">
      <h3 class="grafico-title">Kilômetros rodados por dia</h3>
      <div class="grafico top">

           <Grafico1 v-if="loaded"/>
      </div>
      <h3 class="grafico-title">Valor de multa por dia</h3>
      <div class="grafico">
        <Grafico2 v-if="loaded"/>
      </div>
    </div>
   
  </div>
</template>

<script>
//import {store} from '../vuex'
import Grafico1 from './Grafico1'
import Grafico2 from './Grafico2'
import Slider from './Slider'

export default {
    name: 'Content',
    components: {
    Grafico1,
    Grafico2,
    Slider
  },
  computed: {
    loaded() {
      return this.$store.state.loaded
    },
    card() {
      return { 
        totalKm: this.$store.state.data.totalKm,
        totalFines: this.$store.state.data.totalFines
      }
    }
  },
  data() {
    return {
      totalKm: this.$store.state.data.totalKm
    }
  }


  
}
</script>

<style scoped>


.content-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 80vh;
  margin-right: 5vw;
  margin-left: 5vw;
}

.content-left {
  width: 30%;
  margin-right: 40px;
}

.container-right {
  width: 70%;
}

.card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 40%;
  margin-top: 20px;
  padding: 19px 41px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #8ad4ff;
  box-shadow: inset 0 3px 12px 0 rgba(0, 10, 39, 0.6);
}

.card.filter {
  margin-top: 29px;
}

.card.top {
  height: 100%;
  margin-top: 20px;
  padding-right: 25px;
  padding-left: 25px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.grafico {
  height: 200px;
  border-radius: 20px;
  background-color: #f2f2f2;
  box-shadow: inset 0 3px 10px 0 rgba(0, 0, 0, 0.31);
  padding: 10px 10px 10px 0;
}

.grafico.top {
  height: 200px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
}

.grafico-bottom {
  height: 50%;
}

.card-title {
  margin-top: 0px;
  margin-bottom: 14px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  font-size: 16px;
  font-weight: 400;
}

.card-txt {
  font-style: normal;
  margin-top: 10px;
  margin-bottom: 0;
}

.user-img {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 100%;
  background-color: #fff;
}

.page-title {
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
}

.text-block {
  letter-spacing: 1px;
}

.card-data {
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1px;
}

.card-line {
  margin-bottom: 5px;
}

.card-line.last {
  margin-bottom: 0px;
}

.filter-container {
  height: 60px;
  margin-bottom: 20px;
}

.grafico-title {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
}

.body {
  font-family: Montserrat, sans-serif;
}

@media screen and (max-width: 991px) {
  .card-txt {
    margin-bottom: 5px;
  }

  .card-data {
    font-size: 24px;
  }

  .card-line {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 767px) {
  .content-container {
    height: auto;
    padding-bottom: 80px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .text-block {
    text-align: end;
  }

  .content-left {
    width: 100%;
    height: auto;
    margin-right: 0px;
    margin-bottom: 40px;
  }

  .container-right {
    width: 100%;
  }

  .card.top {
    margin-top: 1px;
    padding-bottom: 25px;
  }

  .grafico {
    height: 200px;
  }

  .card-title {
    font-size: 12px;
  }

  .card-txt {
    margin-bottom: 0px;
    font-size: 12px;
  }


  .page-title {
    font-size: 14px;
    letter-spacing: 0px;
  }

  .text-block {
    letter-spacing: 0px;
  }

  .card-line {
    margin-bottom: 10px;
  }

  .filter-container {
    margin-bottom: 10px;
  }

  .grafico-title {
    font-size: 14px;
  }
}

@media screen and (max-width: 479px) {
  .card.top {
    margin-bottom: -10px;
    padding-bottom: 20px;
  }

  .grafico.top {
    margin-bottom: 10px;
  }

  .text-block {
    width: 100px;
    font-size: 10px;
    line-height: 12px;
    text-align: right;
  }

  .grafico-title {
    margin-bottom: -2px;
  }
}
</style>
