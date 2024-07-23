const productmodel = require("../models/productmodel");
const usermodel = require("../models/usermodel")

const getproduct=(async(req,res)=>{
       
   try{
    const user_products=await usermodel.findById(req._id);
 
    const productPromises = user_products.products.map(async (id) => {
        return await productmodel.findById(id);
      });
      const products = await Promise.all(productPromises);
    const validProducts = products.filter(product => product !== null);
   res.json({
    message:"User Product Feched",
    Success:true,
    products:validProducts
   })
   }
   catch(err){
    res.json({
        message:"Error Occured",
        Success:false,
    })
   }

})
module.exports=getproduct