const usermodel = require("../models/usermodel")

const user_detail=(async(req,res)=>{
       try{
           const user=await usermodel.findById(req._id)
           res.json({
            user:user,
            Success:true,
            message:"user detail"
           })
       }catch(err){
        res.json({
            message:err.message||"some error occured",
            Success:true
        })
       }
})
module.exports=user_detail