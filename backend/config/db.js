const mongoose =require("mongoose");
require('dotenv').config(); 
const Connectdb=async()=>{
    try{
    await mongoose.connect(process.env.URI);
    console.log("Connected to databse");

    }catch(err){
        console.log(err);
    }
    
}
module.exports=Connectdb;