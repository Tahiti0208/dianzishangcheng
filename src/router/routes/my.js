export default [
    {
        path:'/my',
        name:'个人中心',
        component:()=>import('../../views/my.vue'),
        children:[
            {
                path:'order',
                name:'订单',
                component:()=>import('../../views/order.vue'),
                children:[
                    {
                        path:'unpay',
                        name:'待支付',
                        component:()=>import("../../components/order/unpay.vue")
                    },
                    {
                        path:'complete',
                        name:'待收货',
                        component:()=>import("../../components/order/complete.vue")
                    },
                    {
                        path:'end',
                        name:'已完成',
                        component:()=>import("../../components/order/end.vue")
                    },
                    {
                        path:'all',
                        name:'全部订单',
                        component:()=>import("../../components/order/all.vue")
                    }
                ]
            },
            {
                path:'myMsg',
                name:'个人信息',
                component:()=>import("../../components/my/myMsg.vue")
            },
            {
                path:'address',
                name:'收货地址',
                component:()=>import("../../components/my/address.vue")
            },
            {
                path:'like',
                name:'收藏',
                component:()=>import("../../components/my/like.vue")
            }
        ]
    },
    {
        path:'/register',
        name:'注册',
        component:()=>import('../../components/my/register.vue')
    },
    {
        path:'/login',
        name:'登录',
        component:()=>import('../../components/my/login.vue')
    }
]