const mongoose =require('mongoose');
 const userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    user_profile:String,
    isadmin:{
        type:Boolean,
        default:false
    }

},{timestamps:true})
const usermodel=mongoose.model('User',userSchema);
module.exports=usermodel;
