<template>
  <Sidebar />
  <div  class="main-container">
    <HeaderVertical />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from '../components/Sidebar/index'
import Main from '../components/Main/index'
import HeaderVertical from './HeaderVertical/index.vue'
import Footer from '../components/Footer/index.vue'
</script>
<style>
.main-container {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    flex-direction: column;
    min-height: 100%;
  }
</style>