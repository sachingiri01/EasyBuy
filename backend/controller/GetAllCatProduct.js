const productmodel = require("../models/productmodel");
const usermodel = require("../models/usermodel")

const getallcatproduct =(async(req,res)=>{
    
    try{

        const cat=req.body.category;
        const product=await productmodel.find({category:cat.category});
        res.json({
            message:"Product Feched Sucessfully",
            Success:true,
            product:product
          })
     
    }catch(err){
      res.json({
        message:"Feching Failed",
        Success:false
      })
   }
}) 
module.exports=getallcatproduct