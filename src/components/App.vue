<template lang="jade">
div
  .left-nav
    AppNav
  .right-main
    主体部分
    router-view
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

<style lang="stylus" scoped>
.left-nav
  float: left;
  width: 238px;
  height: auto;
.right-main
  float: left;
  margin-left: 20px;
</style>
