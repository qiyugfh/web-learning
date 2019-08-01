// 1.导入vue-router包
import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
import login from './subcom/Login.vue'
import register from './subcom/Register.vue'


// 3.创建路由对象
var router = new VueRouter({
    routes: [
        // account goodslist
        {
            path: '/account',
            component: account,
            children: [{
                    path: 'login',
                    component: login
                },
                {
                    path: 'register',
                    component: register
                }
            ]
        },
        {
            path: '/goodslist',
            component: goodslist
        }
    ]
});

export default router