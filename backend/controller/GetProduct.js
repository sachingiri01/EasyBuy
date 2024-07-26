const productmodel = require("../models/productmodel");

const GetProduct =(async(req,res)=>{
    try{
        const _id=req.body._id;
        const product=await productmodel.findById({_id});
        if(product){
              res.json({
                message:"Product Feched Successfully",
                Success:true,
                product:product
              })
        }else{
            res.json({
                message:"Product Does Not Exist",
                Success:false
            })
        }
    }catch(err){
      res.json({
        message:"Feching Failed",
        Success:false
      })
   }
})
module.exports=GetProduct;