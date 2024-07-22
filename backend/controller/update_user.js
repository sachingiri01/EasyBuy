const usermodel = require("../models/usermodel");
const update_user=(async(req,res)=>{
   try{
    const {_id,email,name,isadmin}=req.body;
    const the_user=await usermodel.findById(_id);
    if(!the_user){
        res.json({
            message:"User Not Found ",
            Success:false
        })
    }
   else{
    const updated_user=await usermodel.findByIdAndUpdate({_id},{name,email,isadmin})
    res.json({
        message:"User Updated Successfully",
        Success:true
    })
   }

   }
    
   catch(err){

    res.json({
        message:"cannot update some error occured",
        Success:false
    })
}
})
module.exports=update_user