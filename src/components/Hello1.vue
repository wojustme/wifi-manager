
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hello1',
  computed: {
    msg () {
	    return 'store.state.msg'
    }
  }
}
</script>

<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
  font: red;
}
</style>
