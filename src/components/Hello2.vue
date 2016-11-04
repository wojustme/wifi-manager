<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hello2',
  data () {
    return {
      msg: 'This is Hello2'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
  font: red;
}
</style>
