var express = require('express');
var router = express.Router();
router.post('/login', (req, res, next) => {
    const fromData = req.body
    if (router.verifyCode != fromData.code) {
        return res.json({
            code: 900,
            msg: '验证码错误'
        })
    }
})
router.post('/getCode', (req, res, next) => {
    console.log(req.body);
    let verifyCode = Math.round(Math.random() * 8999 + 1000);

    res.json({
        code: 200,
        msg: 'ok',
        verifyCode
    })
})
module.exports = router;