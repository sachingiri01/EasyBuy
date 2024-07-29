const cartmodel = require("../models/Cartmodel");
const deletecartitem=(async(req,res)=>{
   try{
      const _id=req.body._id;
     
        const updateitem=await cartmodel.findByIdAndDelete(_id);
        res.json({
        message:"Deleted Successfully",
        Success:true
       })
   }
    
   catch(err){

    res.json({
        message:"cannot delete some error occured",
        Success:false
    })
}
})
module.exports=deletecartitem