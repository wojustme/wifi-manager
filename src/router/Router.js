import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import Hello1 from '../components/Hello1'
import Hello2 from '../components/Hello2'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: App,
  children: [{
    path: 'h1',
    component: Hello1
  }, {
    path: 'h2',
    component: Hello2
  }]
}]

export default new VueRouter({
  routes
})
