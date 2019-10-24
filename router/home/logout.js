module.exports=(req,res)=>{
    req.session.destroy(()=>{
        res.clearCookie('connect.sid');
        res.send();
        //  res.redirect('/admin/login'); /* 退出后的目标 */      
    })
}


/* 

改好退出后的目标

*/