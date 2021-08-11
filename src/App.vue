<template>
  <div id="app">
    <LF />
  </div>
</template>

<script>
import { LF } from '@/components/Logicflow'

export default {
  name: 'App',
  components: {
    LF
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
