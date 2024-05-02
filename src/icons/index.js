// 全局组件集合
// global-components.js
import { createApp } from 'vue';
import svgIcon from './SvgIcon.vue'

// // require.context:读取指定目录的所有文件
// // 第一个：目录
// // 第二个：是否遍历子级目录
// // 第三个定义遍历文件规则
// const req=require.context('./svg',false,/\.svg&/)

// 导出所有全局组件
export const registerGlobalComponents = (app) => {
  app.component('SvgIcon', svgIcon);

  // 注册其他全局组件...
};