<template>
  <template v-for="routeChild in item.children" :key="routeChild.path" :item="routeChild">
    <el-sub-menu :index="routeChild.path">
      <template #title><span>{{ routeChild.meta.title }}</span></template>

      <template v-if="routeChild.children">
        <!-- <template v-for="routeItem in routeChild.children" :key="routeItem.path" :item="routeChild">

                    <el-menu-item :index="routeItem?.path">{{ routeItem.meta.title }}</el-menu-item>
                  </template> -->
        <SubItem :item="routeChild" />
      </template>

    </el-sub-menu>
  </template>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  height: 100vh;
}

.sidebar-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 250px
}
</style>
