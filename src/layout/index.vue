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