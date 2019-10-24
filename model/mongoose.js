//引入数据库模块
const mongoose=require('mongoose');
//连接数据库
 mongoose.connect('mongodb://localhost:27017/loginstatus',{useNewUrlParser:true,
useUnifiedTopology: true,
useCreateIndex: true})
    .then(() => console.log('连接成功'))
    .catch(() => console.log('连接失败'));




    /* 
    
    第四行修改数据库名字  "loginstatus"
    
    */