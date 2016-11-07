/**
 * src/components/App.vue
 * 项目的整体入口文件
 * @author xurenhe
 * @date      2016-11-04
 * @copyright 城云科技
 * @version   0.0.1
 */
<template lang="jade">
#app
  div
    .left-nav
      AppNav
    .right-main
      MainBody
      router-view
</template>

<script>
import { IMG_SERVER } from '../config/Configure'

import AppNav from './appNav/AppNav'
import MainBody from './main/body/MainBody'


export default {
  name: 'App',
  components: {
    AppNav,
    MainBody
  }
}
</script>

<style lang="less" scoped>
#app {
  div.left-nav {
    float: left;
    width: 25%;
    height: auto;
  }
  div.right-main {
    float: left;
    width: 75%;
    height: auto;
  }
}
</style>
