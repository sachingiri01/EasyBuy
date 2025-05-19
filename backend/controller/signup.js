const usermodel = require("../models/usermodel");
const bcrypt = require('bcrypt');

const saltRounds = 10;
const signup=(async(req,res)=>{
    try{
         const {name,email,password,user_profile}=req.body;
         console.log(name);
         
         const already=await usermodel.findOne({email});
         if(already){
            res.json({
                message:"email is already used",
                Success:false
            })
         }
         const salt = await bcrypt.genSalt(saltRounds);
         const hash = await bcrypt.hash(password, salt);

               const userdata=  new usermodel({name,email,password:hash,user_profile})
                 const saveuser= await userdata.save();
                 res.json({
                    data:userdata,
                    message:'user created',
                    Success:true
                });
    }
    
    catch(err){

        res.json({
            message:"Click Again : Some Error",
            Success:false
        })
    }
})

module.exports =signup;