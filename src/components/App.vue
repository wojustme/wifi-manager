<template>
  <div>
    <div class="left-nav">
      <AppNav />
    </div>
    <div class="right-main">
      <div class="app-main">
        主体部分
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from './nav/AppNav'

export default {
  name: 'App',
  components: {
    AppNav
  }
}
</script>

<style lang="less" scoped>
  div.left-nav {
    float: left;
    width: 238px;
    height: auto;
  }

  div.right-main {
    float: left;
    margin-left: 20px;
  }
</style>
