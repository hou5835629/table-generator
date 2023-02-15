<template>
  <div id="app">
    <tableGenerator>
    </tableGenerator>
  </div>
</template>

<script>
import tableGenerator from './components/tableGenerator.vue'
export default {
  name: 'app',
  components: {
    tableGenerator
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>
