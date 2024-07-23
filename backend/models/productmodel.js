const mongoose =require('mongoose');
 const ProductSchema=new mongoose.Schema({
    productname:String,
    brandename:{
        type:String,
    },
    category:String,
    productimage:[],
    description:String,
    price:String,
    selling:String

},{timestamps:true})
const productmodel=mongoose.model('Products',ProductSchema);
module.exports=productmodel;
