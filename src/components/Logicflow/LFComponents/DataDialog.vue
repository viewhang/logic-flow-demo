// 查看数据弹窗
<template>
  <div style="height: 500px; overflow-y: scroll">
    <vue-json-pretty :path="'res'" :data="graphData"> </vue-json-pretty>
  </div>
</template>
<script>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

export default {
  props: {
    graphData: Object,
  },
  components: {
    VueJsonPretty,
  },
}
</script>
<style scoped>
</style>
