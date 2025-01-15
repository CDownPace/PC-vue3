<template>
  <div class="g-container-layout" >
    <!-- <Mobile /> -->
    <!-- <LayoutVertical v-if="device === 'mobile'" /> -->
    <component :is="LayoutComponents['vertical']"/>
    <!-- <Theme /> -->
  </div>
</template>

<script lang="ts" setup>
  import LayoutVertical from './LayoutVertical/index.vue'
  const LayoutComponents = {
    // horizontal: LayoutHorizontal,
    vertical: LayoutVertical,
    // columns: LayoutColumns,
  }


</script>
<style>
  .g-container-layout {
    height: 100%;
    width: 100%;
    display: flex
  }
  .main-container {
      display: flex;
      flex: 1;
      box-sizing: border-box;
      flex-direction: column;
    }
  .g-container-layout {
    height: 100%;
    width: 100%;
  }
  </style>