const jwt =require('jsonwebtoken')
const authenticate=(req,res,next)=>{
    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({message:"user not login",Success:false})
        }
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if(err){
                return  res.json({
                    message:"user not authenticated",
                    Success:false
                })
            }
            req._id=decoded._id;
            req.isadmin=decoded.isadmin;
                    
            next();
             });

    }catch(err){
        res.json({
            message:err.message||"some error occured",
            Success:true
        })
       }
}

const admin_authenticate=(req,res,next)=>{
    try{
        if(req.isadmin) next();
        else return res.json({message:"user is not admin",Success:false})
    }catch(err){
        res.json({
            message:err.message||"some error occured",
            Success:true
        })
       }
}
module.exports={authenticate,admin_authenticate}
