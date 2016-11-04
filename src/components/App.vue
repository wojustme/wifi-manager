<template lang="jade">
div
  .left-nav
    AppNav
  .right-main
    MainBody
    router-view
</template>

<script>
import AppNav from './nav/AppNav'
import MainBody from './main/body/MainBody'
export default {
  name: 'App',
  components: {
    AppNav,
    MainBody
  }
}
</script>

<style lang="stylus" scoped>
.left-nav
  float: left
  width: 238px
  height: auto
.right-main
  float: left
  margin-left: 20px
  width: 80%
</style>
