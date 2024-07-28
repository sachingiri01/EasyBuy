const cartmodel = require("../models/Cartmodel");

const getcartproduct=(async(req,res)=>{
   
    try{
        const userid=req._id;
        const usercart=await cartmodel.find({userid:userid}).populate('productid');
        res.json({
            message:"Data feched",
            Success:true,
            product:usercart
        })
    
    }catch(err){
        res.json({
          message:err,
          Success:false
        })
     }


})
module.exports=getcartproduct;