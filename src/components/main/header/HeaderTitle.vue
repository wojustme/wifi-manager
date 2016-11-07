/**
 * src/components/main/header/HeaderTitle.vue
 * 右侧主体部分的头部组件
 * @author xurenhe
 * @date      2016-11-04
 * @copyright 城云科技
 * @version   0.0.1
 */
<template lang="jade">
div
  |{{headerName}}
</template>

<script>

export default {
  name: 'HeaderTitle',
  data() {
    return {
    }
  },
  props: ['headerName']
}
</script>

<style lang="less" scoped>
div {
  text-align: center;
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-decoration: underline;
  font-weight: normal;
  color: rgb(131, 209, 212);
  background-color: rgb(255, 255, 255);
}

</style>
