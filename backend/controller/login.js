const usermodel = require("../models/usermodel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const login =(async(req,res)=>{
     try{
       const {email,password}=req.body;
      
    if(!email){
        throw new Error("Provide  email please")
    }
        const user=await usermodel.findOne({email});
        if(!user){
            throw new Error("User not found")
        }  
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const data={
                _id:user._id,
                email:user.email,
                isadmin:user.isadmin
            }
        const token= jwt.sign(  data , process.env.SECRET, { expiresIn: '8h' });
          return res.cookie("token",token,{httpOnly:true,secure:true}).status(200).json({ message: "Login Successful", Success: true,data:token });
        } else {
          return res.status(400).json({ message: "Invalid Password", Success: false });
        }
    

     }catch(err){
        res.json({
            message:"Cannot login try again",
            Success:false
        })
     }
})
module.exports=login