const productmodel = require("../models/productmodel");
const usermodel = require("../models/usermodel");
const update_product=(async(req,res)=>{
   try{
    console.log(req.body._id);
    const _id=req.body._id
    const update_product_detail=await  productmodel.findByIdAndUpdate(_id,  req.body , { new: true })
    res.json({
        message:"Product Updated SuccessFully",
        Success:true,
      })
   } catch(err){

    res.json({
        message:"some error occured",
        Success:false
    })
}
})
module.exports=update_product

