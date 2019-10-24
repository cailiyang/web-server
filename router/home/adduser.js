const user = require('../../model/usercount');
// const md5 = require('md5');
module.exports = async (req, res) => {
    try {
        await user.create(req.body);
        
    } catch (error) {
        console.log('数据创建失败');
        return ;
    }
    res.send();
// req.session.loginUser = data;
// req.app.locals.loginUser = data;
// res.redirect('/home/index');
}