const createError = require('http-errors');
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const whiteList = [
  'http://localhost:8080','http://127.0.0.1:5500','http://localhost:8081'
]
const corsOptions = {
  origin:function(origin,callback){
    console.log(origin,'o');
    console.log(whiteList.indexOf(origin));
    if(whiteList.indexOf(origin) != -1){
      callback(null,true) 
    }else{
      callback(new Error('00000'))
    }
  }
}
app.use(cors());
const token = jwt.sign({
  name:'---',
  nickname:'yyy'
},
"jiafeng",
	{ expiresIn: 60 * 60 }
)

console.log(token); //登录成功把这个扔给前台, 最简单的存储方式: localStorage
jwt.verify(token, 'jiafeng',(error, data)=>{
  console.log(error, 'error');
  console.log(data, 'data');
});
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
