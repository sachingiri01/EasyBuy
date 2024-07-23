const productmodel = require("../models/productmodel");
const usermodel = require("../models/usermodel");
const upload_user_product=(async(req,res)=>{

    try{
        const product= await productmodel(req.body);
        const save_product=await product.save();
        const update_user=await usermodel.findOneAndUpdate({_id:req._id},{$push:{products:product._id}})
          res.json({
            message:"Product Uploaded SuccessFully",
            Success:true,
            data:product._id
          })
    
    }
    
    catch(err){

        res.json({
            message:"some error occured",
            Success:false
        })
    }
})

module.exports=upload_user_product