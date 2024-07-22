const express =require('express');
const router = express.Router();
const signup =require("../controller/signup");
const login =require("../controller/login");
const {authenticate,admin_authenticate} = require('../middleware/auth');
const user_detail = require('../controller/user_detail');
const logout = require('../controller/logout');
const all_user = require('../controller/all_user');
const update_user = require('../controller/update_user');
router.post('/signup',signup);
router.post('/login',login);
router.get('/userdetail',authenticate,user_detail)
router.get('/logout',logout)
router.get('/alluser',authenticate,admin_authenticate,all_user)
router.post('/updateuser',authenticate, admin_authenticate,update_user)
module.exports=router
