const jwt = require('jsonwebtoken');
let authorization = function(){
    return function(req,res,next){
        if(req.headers.authorization){
            const Bearer = req.headers.authorization;
            const token = Bearer.substr(7);
            jwt.verify(token,'Buka-B0322',function(error,decode){
                if(error){
                    return res.status(401).json(error);
                }
                next();
            })
        }
    }
}
module.exports = authorization