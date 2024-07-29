const usermodel = require("../models/usermodel");
const cartmodel = require("../models/Cartmodel");
const updatequantitycart=(async(req,res)=>{
   try{
      const _id=req.body._id;
      const toincrement=req.body.toincrement;
      if(toincrement){
        const updatequantity = await cartmodel.findByIdAndUpdate(
            _id,
             {$inc:{ quantity: 1 }},
            { new: true }  // Ensure the updated document is returned
          );
       
      }else{
        const updateitem=await cartmodel.findByIdAndUpdate(_id,{$inc:{quantity:-1}},{ new: true });
      }
      res.json({
        message:"Updated Successfully",
        Success:true
    })
   }
    
   catch(err){

    res.json({
        message:"cannot update some error occured",
        Success:false
    })
}
})
module.exports=updatequantitycart