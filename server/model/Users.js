const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/zhaolala',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const Schema = mongoose.Schema;
const userSchema = new Schema({
    mobile:{
        type:String,
        required:true
    },
    email:String,
    username:String,
    password:String,
    nickname:String,
    gender:{
        type:Number,
        enum:[-1,0,1]
    },
    age:{
        type:Number,
        min:0,
        max:120
    },
    avatar:{
        type:String,
        default:'/uploads/avatar-default.png'
    },
    introduce:String,
    last_modefled_time:{
        type:Date,
        default:Date.now
    }},
    {
        timestamps:{
        createdAt:'create_time',
        updatedAt:'update_time'
        },
        // versionKey:false
    
});
const User = mongoose.model('User',userSchema,'user');
new User({
    mobile:18445637520,
    email:'zhaolala@niubi.com',
    username:'zhaolala',
    nickname:'赵啦啦',
    gender:-1,
    age:18,
    introduce:'这是赵啦啦',
}).save()
module.exports = User;

