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
router.post('/signup',signup);
router.post('/login',login);
router.get('/userdetail',authenticate,user_detail)
router.get('/logout',logout)
router.get('/alluser',authenticate,admin_authenticate,all_user)
router.post('/updateuser',authenticate, admin_authenticate,update_user)
router.post('/uploadproduct',authenticate,admin_authenticate,upload_user_product);
router.get('/getproducts',authenticate,admin_authenticate,getproduct)
router.post('/update-product',authenticate,admin_authenticate,update_product)
module.exports=router
