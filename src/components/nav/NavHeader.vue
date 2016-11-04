/**
 * src/components/nav/NavHeader.vue
 * 导航头部标题
 * @author xurenhe
 * @date      2016-11-04
 * @copyright 城云科技
 * @version   0.0.1
 */
<template>
  <div>
    <img
      :src="url"
    />
  </div>
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
    height: 79px;
  }
</style>
