import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 手动安装VueRouter
Vue.use(VueRouter)
// 导入app组件
import app from './App.vue'

import router from './router.js'



var vm = new Vue({
    el: '#app',
    render: c => c(app), // render会把el指定的容器中，所有的内容都清空覆盖，所以不要把
    // 路由的 router-view 和 router-link 直接写到 el 所控制的元素中。
    router // 4. 将路由对象挂在到vm上
})

// 注意： App这个组件是通过vm实例的render函数渲染出来的，render函数渲染出来的组件是放到
// el: '#app'所指定的元素中的；
// Account和GoodsList组件，是通过路由匹配监听到的，所以这两个组件，只能展示到属于路由的
// <router-view></router-view>中去。