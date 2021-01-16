const express = require('express');
const router = express.Router();
const authorization = require('../middleware/authorization.js')
const jwt = require('jsonwebtoken')
/* GET home page. */
router.use('/home',authorization())
router.get('/home', function(req, res, next) {
  // res.render('index', { title: 'Express' });
//   const Bearer = req.headers.authorization
//   const token = Bearer.substr(7);
//   jwt.verify(token,'Buka-B0322',(error,decode)=>{
// if(error){
//   return res.status(401).json(error)
// }
 res.json({

  code:200,
  data:{
    title:'赵啦啦',
    body:"啦啦啦"
  }
})

  
  // jwt.verify(token,"Buka-B0322",(error,decode)=>{
  //   console.log(error,"error");
  //   console.log(decode);
  // })
  res.status(401).json({
    code:200,
    data:{
      title:"啦啦啦",
      body:"赵啦啦"
    }
  });
})

module.exports = router;
