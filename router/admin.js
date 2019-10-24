//加载模块
const express = require('express');
//生成一级路由
const admin = express.Router();

//测试请求
// admin.get('/test',require('./admin/test'));
//admin.get('/test',require('./admin/test'));
//admin.post('/test',require('./admin/test'));
admin.post('/login',require('./admin/login')); //登录路由




module.exports=admin;

/* 
根据需求复制第8行或第9行  修改"test", 对应新建js文件
*/