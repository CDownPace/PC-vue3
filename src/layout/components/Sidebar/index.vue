<template>
  <div class="sidebar-container">

    <Logo :is-collapse="false" ></Logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu default-active="2" :unique-opened="true" active-text-color="#409eff" background-color="#304156" class="el-menu-vertical-demo"
        text-color="#bfcbd9" :collapse="isCollapse" @open="handleOpen" @close="handleClose">

        <template v-for="route, index in allRouterData" :key="route.path" :item="route">
          <el-sub-menu :index="route.path">
            <template #title>
              <el-icon>
                <component :is=route?.meta.icon></component>
              </el-icon>
              <span>{{ route.meta.title }}</span>
            </template>
            <SubItem :item="route" />
          </el-sub-menu>
        </template>

      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import allRouter from '../../../routers/sideBarRouter'
import { computed } from 'vue'
import SubItem from '../SubMenu/SubItem.vue'
import Logo from './Logo.vue'

const isCollapse = ref(false)
const allRouterData = computed(() => allRouter)
console.log('allRouterData---', allRouterData)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  height: calc(100vh - 50px);
}
.sidebar-container {
  display: flex;
  flex-direction: column;
  /* min-height: calc(100vh - 50px); */
  min-width: 250px;
  position: relative;
}
</style>
