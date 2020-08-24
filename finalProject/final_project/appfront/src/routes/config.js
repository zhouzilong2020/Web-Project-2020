export default{
    mode : 'history',
    routes:[
        {
            path:'/',
            name:'',
            component: ()=> import("@/components/footer")
        },{
            path:'/homepage/:account',
            name:'homepage',
            component: ()=> import("@/pages/homepage")
        },{
            path:'/dialog',
            name:'dialog',
            component: ()=> import("@/components/dialog"),           
        },{
            path:'/index',
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
            path:'/newsChannel/:channelId',
            name:'newsPage',
            component: ()=> import("@/pages/newsPage")
        },{
            path:'*',
            name:'404',
            component: ()=> import("@/pages/NotFound")
        }
    ]
}

