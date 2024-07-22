const logout =(async(req,res)=>{
    try{ 
      
        res.clearCookie('token');
        res.json({
            message:'Logout sucessfully',
            Success:true
        })

    }  catch(err){

        res.json({
            error:err,
            message:"cannot logout some rror occured",
            Success:false
        })
    }
})

module.exports=logout