//加载模块
const express = require('express');
//生成一级路由
const home = express.Router();


// home.get('/test',require('./home/test'));
//home.get('/test',require('./home/test'));
//home.post('/test',require('./home/test'));
home.post('/register',require('./home/adduser'));//注册路由
home.get('/logout',require('./home/logout'));    //退出路由



module.exports=home;

/* 

根据需求复制第8行或第9行  修改"test", 对应新建js文件

*/