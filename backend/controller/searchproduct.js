const productmodel = require("../models/productmodel");

const searchproducts=(async(req,res)=>{
    try{

        const search=req.query.s;
        console.log(search);
        
        const  rexsearch=new RegExp(search, 'ig');

        const product=await productmodel.find({
            "$or":[
                {productname:rexsearch},
                {brandename:rexsearch},
                {category:rexsearch}
            ]
        })
        
        res.json({
            products:product,
            message:"Product searched sucessfully",
            Success:true
        })
        
    } catch(err){

    res.json({
        message:err,
        Success:false
    })
}
})
module.exports=searchproducts
