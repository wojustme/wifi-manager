/**
 * src/components/main/body/MainBody.vue
 * 右侧主体部分
 * @author xurenhe
 * @date      2016-11-04
 * @copyright 城云科技
 * @version   0.0.1
 */
<template lang="jade">
div
  HeaderTitle(headerName="租户分组")
</template>

<script>
import HeaderTitle from '../header/HeaderTitle'

export default {
  name: 'MainBody',
  components: {
    HeaderTitle
  }
}
</script>

<style lang="less" scoped>
</style>
