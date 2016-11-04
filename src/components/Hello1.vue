
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

<style lang="stylus" scoped>
div
  h1
    font-weight: normal
    border 1px solid #eee
  .c
    border 1px solid #eee
</style>
