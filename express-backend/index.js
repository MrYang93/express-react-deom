const express = require('express');
let app = express();
const cors = require('cors');


const mongoose = require('mongoose');

let User = require('./models/user')

mongoose.connect('mongodb://localhost:27017/express-react-deom');

let db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {

  // let user = new User({username:'Tiger',email: 'tiger@tiger.com'})
  // user.save(function(err){
  //   if (err) console.log(err);
  // })
  console.log('success!')
});

app.use(cors());

//GET /username
// app.get('/username', function(req, res) {
//     res.send({username: "yang"});
// })

// GET /users
app.get('/users', function(req, res) {
  User.find().exec(function(err, users) {
    // console.log(users); 执行curl -X GET 'http://localhost:3000/users'  会在  nodemon index.js 哪里输出,但是，此时，curl 请求不到任何返回信息，因为　console.log(users) 只会把 信息打印到后台终端。curl 请求不到信息，未来浏览器也就请求不到。所以要把这一行 改为
    res.json({users})
    //这样我们的请求就可以得到完整的 users ,而且是一个json 格式的对象,到这里后台就准备就绪了,
  });
})
// req 是 request 请求缩写  express  用这个变量来接收前台发过来的请求
// res 是 response 响应的缩写,用来响应前台发过来的请求,实际作用就是往前台发送数据.
app.get('/users/:id', function(req, res) {
  User.findById(req.params.id,function (err,user) {
      console.log(user);
      res.json({user})
    })
  // console.log(req.params.id);
})

app.listen(3000, function() {
    console.log('running on port 3000...');
})

// ### curl
//
// - 用curl测试API,是一个安装在新系统命令个行的工具，可以用来发http请求，用来测API
// - curl -X GET 'http://localhost:3000/username' 发送GET请求的时候，-X可以不写
//参考  https://happypeter.github.io/digicity/#toc

//mongod --dbpath=./data/db  首先在后台运行 启动数据库
//mongo-express        http://localhost:8081   启动可视化数据库  默认账号 admin  密码pass
// nodemon index.js   执行js代码
// curl -X GET 'http://localhost:3000/users'     模拟请求,测试API
