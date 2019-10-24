const user = require('../../model/usercount');
// const md5 = require('md5');
module.exports = async (req, res) => {
    let data = await user.findOne({ username: req.body.username });
    console.log(data);
req.session.loginUser = data;
req.app.locals.loginUser = data;

    res.send();

   
// req.session.loginUser = data;
// req.app.locals.loginUser = data;
// res.redirect('/home/index');
               

}