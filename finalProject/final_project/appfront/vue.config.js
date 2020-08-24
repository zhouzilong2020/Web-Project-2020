module.exports = {
  //quasar
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar' 
  ],


  // weppack 代理配置
  
  // 已经在django服务器中处理了跨域问题

  // devServer:{// 开发服务器配置
  //   proxy:{
  //     "/api" : {
  //       target: "http://127.0.0.1:8000"// 代理目标
  //     }
  //   }
  // }


}
