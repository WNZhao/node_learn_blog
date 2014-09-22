
/*
 * GET home page.
   /:首页
   /reg:用户登录
   /post:发表文章
   /logout:登出
 */

var crypto = require('crypto'),User = require('../models/user.js');

module.exports = function(app){
  app.get('/',function(req,res){
        res.render('index', { title: 'little bird-主页' });
  });
  app.get('/reg',function(req,res){
        res.render('reg',{title:'注册'});
  });
  app.post('/reg',function(req,res){
     var name = req.body.name,
         password = req.body.password,
         password_re = req.body['password-repeat'];
     if(password_re!=password){
        req.flash('error','两次输入的密码不一致！');
        return res.redirect('/reg'); //return reg page
     }
     //generate md5 val
     var md5 = crypto.createHash('md5'),
         password = md5.update(req.body.password).digest('hex');
     var newUser = new User({
            name:name,
            password,password,
            email:req.body.email
         });
     //check use exists or not
     User.get(newUser.name,function(err,user){
          if(user){
             req.flash('error','用户已存在！');
             return res.redirect('/reg');
          }
          //not exists
          newUser.save(function(err,user){
              if(err){
                 req.flash("error",err);
                 return res.redirect('/reg');
              }
              req.session.user = user; //save into session
              req.flash('success','注册成功！');
              res.redirect('/');
          });
     });
        
  });
  app.get('/login',function(req,res){
        res.render('login',{'title':'登录'});
  });
  app.post('/login',function(req,res){
  
  });
  
  app.get('/post',function(req,res){
      res.render('post',{title:'发表'});
  });
  
  app.post('/post',function(req,res){

  });

  app.get('/logout',function(req,res){

  });
  
};
