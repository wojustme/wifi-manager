/**
 * src/components/nav/NavItem.vue
 * 导航选项
 * @author xurenhe
 * @date      2016-11-03
 * @copyright 城云科技
 * @version   0.0.1
 */
<template>
  <div class="nav-item">
    dss
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  props: ['name', 'isSelect'],
  data() {
    return {
    }
  },
  computed: {
    url() {
      console.log();
      return "../../assets/images/nav/角色导航.png"
    }
  }
}
</script>

<style scoped>
  div.nav-item {
    height: 80px;
  }
</style>
