<template>
  <el-menu-item :index="onlyOneChild.path">
          <el-icon :size="20">
            <component :is="onlyOneChild?.meta.icon"></component>
          </el-icon>
          <template #title>{{ onlyOneChild.meta && onlyOneChild.meta.title }}</template>
        </el-menu-item>
        
</template>