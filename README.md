# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


###  sideBar
采用递归嵌套，循环查找路由里是否有子元素
Sidebar/index.vue 文件里判断是否有children，使用SubItem子组建。
SubItem组件再进行判断children,有的话调用自身，完成多层嵌套，没有的话使用“el-menu-item”，就没有下拉箭头，并且可以进行路由的跳转。

