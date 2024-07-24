const productmodel = require("../models/productmodel");
const usermodel = require("../models/usermodel")

const GetProductByCategory = (async(req,res)=>{
   try{
    const cat=await productmodel.distinct("category");
    const allproducts=[];
    for(const category of cat){
        const product=await productmodel.findOne({category:category})
        allproducts.push(product);
    }
    res.json({
        message:"Category Feched ",
        Success:true,
        products:allproducts,
    })
   }
   catch(err){
      res.json({
        message:"Feching Failed",
        Success:false
      })
   }
})
module.exports=GetProductByCategory