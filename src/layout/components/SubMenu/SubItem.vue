<template>
  <template v-if="!item.hidden">
    <template v-if="!!item.children">
      <template v-for="routeChild in item.children" :key="routeChild.path" :item="routeChild">
        <el-sub-menu :index="routeChild.path">
          <template #title>
            <el-icon>
              <component :is=routeChild?.meta.icon></component>
            </el-icon>
            <span>{{ routeChild.meta.title }}</span></template>

          <template v-if="!!routeChild.children">
            <SubItem :item="routeChild" />
          </template>
          <template v-else>
            <el-menu-item :index="routeChild.path">
              <template #title>
                <el-icon>
                  <component :is=routeChild?.meta.icon></component>
                </el-icon>
                <span>{{ routeChild.meta.title }}</span></template>
            </el-menu-item>
          </template>

        </el-sub-menu>
      </template>
    </template>

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
