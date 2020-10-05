import Vue from 'vue'
import Vuex from 'vuex'
import writers from './modules/writers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    writers,
  }
})
