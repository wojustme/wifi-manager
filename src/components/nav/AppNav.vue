/**
 * src/components/nav/AppNav.vue
 * 导航
 * @author xurenhe
 * @date      2016-11-03
 * @copyright 城云科技
 * @version   0.0.1
 */
<template>
  <div>
    <NavItem name="角色导航" />
    <NavItem name="角色导航" />
    <NavItem name="角色导航" />
    <NavItem name="角色导航" />
  </div>
</template>

<script>
import NavItem from './NavItem'


export default {
  name: 'AppNav',
  components: {
    NavItem
  }
}
</script>

<style lang="css" scoped>
  div {
    width: 238px;
    background-color: red;
  }
</style>
