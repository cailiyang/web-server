//onst usercount=require('../../model/usercount');/* 引入集合规则 */
module.exports= async (req,res)=>{
    try{
        //不成功的操作
        
        }catch(e){
        //提示错误信息
        //相应操作
        return;//跳出错误函数，服务器不受影响
        }
        res.send('这是admin的路由'); 
}

/* 

此文件编写前端逻辑功能代码
操作数据库需引入数据集合规则文件，改好集合规则文件名

*/



/* 数据库操作方法

增
集合规则名.create({});集合规则名修改好    传入数据为对象格式
删
集合规则名.findOneAndDelete({}));  传入条件数据 格式为对象格式
该
集合规则名.updateOne({条件},{修改内容}); 格式为对象格式   
查
集合规则名.findOne({});  传入条件数据 格式为对象格式
集合规则名.findOne({}).select('-password'); 不要某个字段，其他同上
其他

res.redirect(定位符)); 重定向

let articles=await pagination(Article).page(1).size(2).display(5).populate('author').exec();分页查询，const pagination=require('mongoose-sex-page');记得引入模块 
*/