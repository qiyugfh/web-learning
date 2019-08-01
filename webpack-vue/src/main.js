// 导入Jquery
import $ from 'jquery'
// const $ = require('query')

// 使用import语法，导入CSS样式表
import './css/index.css'

import './css/index.less'

import './css/index.scss'

// 引用node_modules中的相关文件，不需要写node_modules这一层目录
import 'bootstrap/dist/css/bootstrap.css'


// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from "vue"

import login from "./login.vue"

import m1, {
    title as title123,
    content
} from "./js/test.js"

console.log(m1)
console.log(title123)
console.log(content)

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123',
    },
    // comments: {
    //     login
    // },
    render: function (createElements) {
        return createElements(login)
    },

    render: c => c(login)
})

// var vm = new Vue({el:'#app', render: c=>c(login)})
// $(function () {
//     // 奇数行
//     $('li:odd').css('backgroundColor', 'blue')
//     // 偶数行
//     $('li:even').css('backgroundColor', function () {
//         return '#' + 'D97634'
//     })
// })

// // class关键字是ES6新语法
// class Person {
//     static info = { name: 'zs', age: 20 }
// }
// var p1 = new Person()
// console.log("Person.info: " + Person.info)

// // ES6之前的类实现方式
// function Animal(name) {
//     this.name = name
// }
// Animal.info = 123
// var a1 = new Animal('小花')
// console.log(Animal.info)
// console.log(a1.name)