// nodejs模块化开发
// 基于配置的开发环境

const express = require('express');
const proxy = require('http-proxy-middleware');
// 引入配置文件
const {port,host,root} = require('./config');

// 引入路由文件
// const Router = require('./router');

let app = express();

// 利用中间件实现静态资源服务器
app.use(express.static(root));

//给所有路由设置允许跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    
    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.sendStatus(200);/*让options请求快速返回*/
    } else{
      next();
    }
});


app.use('/spring', proxy({
    "target": "http://m.springtour.com",
    "changeOrigin": true,
    // 重写路径：参数第一个是地址中要删除的，第二个是要添加的内容
    "pathRewrite": {
        "^/spring" : "/"
    }
  }));

// 路由
// app.use(app);

app.listen(port,()=>{
    console.log(`server is running on http://${host}:${port}`);
})
