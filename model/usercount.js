/* 该文件编写数据表的集合规则 */
//引入模块
const mongoose = require('mongoose');
//创建集合规则
const userCountSchema  /* name */ = new mongoose.Schema({
    /* 修改区域 */
    username: {
        type: String,
        required: [true, '用户名没有填写'],
        minlength: [2, '标题太短了'],
        maxlength: [30, '标题太长了'],
    },
    password: {
        type: String,
        required: [true, '密码没有填写'],
    },
   
/* //修改区域 */
});
//创建集合
const UserCount /* name */ = mongoose.model('UserCount' /* name */, userCountSchema /* name */);
//导出数据
module.exports = UserCount;/* name */



/* 

1、name注释区域改名
2、集合规则对象编写

*/