

<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
localStorage.roles = ''
</script>

<style scoped>
#app {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: Avenir, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
