/**
 * src/main.js
 * 项目的入口文件   引入路由和状态树
 * @author xurenhe
 * @date      2016-11-07
 * @copyright 城云科技
 * @version   0.0.1
 */

import Vue from 'vue'
import Router from './router/Router'
import Store from './store/index'

new Vue({
  el: '#app',
  router: Router,
  store: Store,
  template: '<router-view ><router-view>'
})
