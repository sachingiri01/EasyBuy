const cartmodel = require("../models/Cartmodel");
const productmodel = require("../models/productmodel");

const getfilterproduct=(async(req,res)=>{
     
    try{
        const catarray=req.body
        const filterproduct =await productmodel.find({category:{$in :catarray}})
            res.json({
                message:"Data feched",
                Success:true,
                products:filterproduct
            })
    
    }catch(err){
        res.json({
          message:"h",
          Success:false
        })
     }


})
module.exports=getfilterproduct;