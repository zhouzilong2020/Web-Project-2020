export default{
    mode : 'history',
    routes:[
        {
            path:'/',
            name:'index',
            component: ()=> import("@/components/HelloWorld"),           
        },{
            path:'/login',
            name:'login',
            component: ()=> import("@/components/user/loginForm")
        },{
            path:'/register',
            name:'register',
            component: ()=> import("@/components/user/regForm")
        },{
            path:'/post',
            name:'post',
            component: ()=> import("@/components/BBS/post")
        },{
            path:'/newsChannel/:channelId',
            name:'newsPage',
            component: ()=> import("@/pages/newsPage")
        },
    ]
}

