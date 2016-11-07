import Vue from 'vue'
import Vuex from 'vuex'

import { AppNav, AppNavGetters, AppNavActions } from './modules/appnav'


Vue.use(Vuex)


export default new Vuex.Store({
  actions: {
    ...AppNavActions
  },
  getters: {
    ...AppNavGetters
  },
  modules: {
    AppNav
  }
})
