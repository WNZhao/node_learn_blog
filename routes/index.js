
/*
 * GET home page.
   /:首页
   /reg:用户登录
   /post:发表文章
   /logout:登出
 */

module.exports = function(app){
  app.get('/',function(req,res){
        res.render('index', { title: 'little bird-主页' });
  });
  app.get('/reg',function(req,res){
        res.render('reg',{title:'注册'});
  });
  app.post('/reg',function(req,res){
        
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
