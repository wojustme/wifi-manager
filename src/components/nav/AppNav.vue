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
      :isSelect="navStatus",
      @clickNavItem="clickNavItem"
    )
</template>

<script>
import NavItem from './NavItem'
import NavHeader from './NavHeader'

export default {
  name: 'AppNav',
  components: {
    NavItem,
    NavHeader
  },
  data() {
    return {
      navItems: {
        "租户导航": true,
        "用户导航": false,
        "权限导航": false,
        "角色导航": false
      },
      selectNav: "租户导航"
    }
  },
  methods: {
    clickNavItem(navName) {
      this.navItems[this.selectNav] = false
      this.navItems[navName] = true
      this.selectNav = navName
    }
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
