/**
 * src/components/nav/NavHeader.vue
 * 导航头部标题
 * @author xurenhe
 * @date      2016-11-04
 * @copyright 城云科技
 * @version   0.0.1
 */
<template lang="jade">
div
  img(:src="url")
</template>

<script>
import { IMG_SERVER } from '../../config/Configure'

export default {
  name: 'NavHeader',
  data() {
    return {
      url: IMG_SERVER + "导航标题" + ".png"
    }
  }
}
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 80px;
  background-color: rgb(255, 255, 255);
}
</style>
