<template>
  <div class="header-layout">
    <div class="nav-wrap">
      <el-icon :size="20"><expand /></el-icon>
      <span href="/" target="_blank" >
        系统导航栏
      </span>
    </div>
    <div class="user-warp">
      <!-- <el-icon  :size="20" color="#000000"><User /></el-icon> -->
      <el-icon :size="20" color="#000000"><UserFilled /></el-icon>
      <span style="padding-left: 5px;">身份信息</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './index.scss';
</style>
