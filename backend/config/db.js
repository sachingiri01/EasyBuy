const mongoose =require("mongoose");
const { MongoClient } = require("mongodb");

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
