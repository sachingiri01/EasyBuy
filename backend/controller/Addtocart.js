const cartmodel=require("../models/Cartmodel")
const productmodel = require("../models/productmodel");

const AddToCart =(async(req,res)=>{
    try{
        const userid=req._id;
        const productid=req.body.productid;
        const quantity=req.body.quantity;
        const alreadyincart=await cartmodel.findOne({productid:productid})
    if(alreadyincart) {
        res.json({
            message:"Product is Already in Cart",
            Success:false
        })
    }
      else{
        const cart= {
            productid:productid,
            userid:userid,
            quantity:quantity
        }
        const newitem=await cartmodel(cart);
        const saveitem=await newitem.save();
        res.json({
            message:"Product Added to Cart",
            Success:true
        })
      }
    
    }catch(err){
        res.json({
          message:err,
          Success:false
        })
     }

})
module.exports=AddToCart