const express = require('express');
const hero = require('./router/hero');

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//这一句是连接上数据库
mongoose.connect('mongodb://localhost:27017/hero', { useNewUrlParser: true });

// var db = mongoose.connect('mongodb://localhost:27017/hero',{useNewUrlParser:true},function(err){
//   if(err){
//     console.log('Connection Error:' + err)
//   }else{
//     console.log('Connection success!') }
//
// });

//这里的myDbs是数据库的名字，不是表的名字

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',hero);
app.use(express.static('dist'));
app.listen(3000,() => {
  console.log('app listening on port 3000.')
})
