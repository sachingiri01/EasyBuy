const usermodel = require("../models/usermodel")

const all_user=(async(req,res)=>{
       try{
        const user=await usermodel.findById(req._id);
        if(user.isadmin){
            const all_user_data=await usermodel.find({});

            res.json({
              all_user:all_user_data,
              message:"user data collected",
              Success:true
            })
        }
       else{
        res.json({
            message:"user is not admin",
            Success:false
          })
       
       }
       }catch(err){
        res.json({
            error:err,
            Success:false
        })
       }
})
module.exports=all_user