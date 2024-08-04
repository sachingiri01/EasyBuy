const express =require('express');
const router = express.Router();
const signup =require("../controller/signup");
const login =require("../controller/login");
const {authenticate,admin_authenticate} = require('../middleware/auth');
const user_detail = require('../controller/user_detail');
const logout = require('../controller/logout');
const upload_user_product =require('../controller/upload_product')
const all_user = require('../controller/all_user');
const update_user = require('../controller/update_user');
const getproduct = require('../controller/getproducts');
const update_product = require('../controller/updateproduct');
const GetProductByCategory = require('../controller/GetProductByCategory');
const getallcatproduct=require("../controller/GetAllCatProduct");
const GetProduct = require('../controller/GetProduct');
const AddToCart = require('../controller/Addtocart');
const getcartproduct = require('../controller/GetCartProducts');
const updatequantitycart = require('../controller/UpdateQuantityCart');
const deletecartitem = require('../controller/DeleteCartitem');
const searchproducts = require('../controller/searchproduct');
router.post('/signup',signup);
router.post('/login',login);
router.get('/userdetail',authenticate,user_detail)
router.post('/addtocart',authenticate, AddToCart);
router.get('/getcartproduct',authenticate,getcartproduct)
// router.get('/getallcartproduct',authenticate,getallcatproduct)
router.post("/deletecartitem",deletecartitem);
router.post('/updatequantitycart',updatequantitycart)
router.get('/logout',logout)
router.get('/alluser',authenticate,admin_authenticate,all_user)
router.post('/updateuser',authenticate, admin_authenticate,update_user)
router.post('/uploadproduct',authenticate,admin_authenticate,upload_user_product);
router.get('/getproducts',authenticate,admin_authenticate,getproduct)
router.post('/update-product',authenticate,admin_authenticate,update_product)
router.get('/getproductbycategory',GetProductByCategory)
router.post('/getallcatproduct',getallcatproduct)
router.post('/product-detail',GetProduct)
router.post('/searchproducts',searchproducts);
module.exports=router
