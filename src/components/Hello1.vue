
<template  lang="jade">
div
  h1(re="fsdfs") ok{{msg}}
  .c rewre
</template>

<script>
export default {
  name: 'Hello1',
  computed: {
    msg () {
	    return '这是Hello1'
    }
  }
}
</script>

<style lang="less" scoped>
div {
  h1 {
    fon
    font-weight: normal
    border 1px solid #eee
  }
  .c {
    color: red;
  }
}
</style>
