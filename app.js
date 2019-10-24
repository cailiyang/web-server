//引入express模块
const express=require('express');
//引入地址path功能模块
const path=require('path');
//引入post数据接收模块
const bodyParser=require('body-parser');
//保持的登录的cooke值管理模块
const session = require('express-session');
//连接数据库文件
require('./model/mongoose');
//创建服务
const app=express();

//静态资源
app.use(express.static(path.join(__dirname,'public')));

//登陆保持配置
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }));

// 拦截请求 判断用户登录状态
app.use('/admin', require('./middleware/loginGuard'));


//接收post数据包
app.use(bodyParser.urlencoded({extended:false}));

//前端后端路由分发
app.use('/home',require('./router/home'));
app.use('/admin',require('./router/admin'));


//监听端口
app.listen((80), () => {
    console.log(`服务器启动成功，端口号：80`);
});


