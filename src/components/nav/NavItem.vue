/**
 * src/components/nav/NavItem.vue
 * 导航选项
 * @author xurenhe
 * @date      2016-11-03
 * @copyright 城云科技
 * @version   0.0.1
 */
<template lang="jade">
.nav-item
  img(
    :src="url",
    @click="clickNavItem()"
  )
</template>

<script>
import { IMG_SERVER } from '../../config/Configure'

export default {
  name: 'NavItem',
  props: ['name', 'isSelect'],
  data() {
    return {
    }
  },
  computed: {
    url() {
      let postfix = this.isSelect ? "_selected.png" : ".png"
      return IMG_SERVER + this.name + postfix
    }
  },
  methods: {
    clickNavItem() {
      this.$emit('clickNavItem',this.name)
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-item
  height: 80px
  img
    cursor: pointer
</style>
