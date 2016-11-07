/**
 * src/components/nav/AppNav.vue
 * 导航
 * @author xurenhe
 * @date      2016-11-03
 * @copyright 城云科技
 * @version   0.0.1
 */
<template lang="jade">
div
  NavHeader(name="导航标题")
  div.nav-item
    NavItem(
      v-for="navStatus, navName in navItems",
      :name="navName",
      :isSelect="navStatus"
    )
</template>

<script>
import { mapGetters } from 'vuex'

import NavItem from './NavItem'
import NavHeader from './NavHeader'

export default {
  name: 'AppNav',
  components: {
    NavItem,
    NavHeader
  },
  computed: {
    ...mapGetters({
      navItems: 'navItems',
      selectNav: 'selectNav'
    })
  }
}
</script>

<style lang="less" scoped>
div {
  width: 100%;
  .nav-item {
    width: 238px;
  }
}
</style>
