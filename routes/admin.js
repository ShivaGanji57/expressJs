const express=require('express')
const controller=require('../controller/adminController')
const router=express.Router();

router.get('/add-product',controller.getAddProduct)

router.post('/add-product',controller.addproduct)
router.get('/contact-us',controller.getContactUs)
router.post('/success',controller.getSuccess)

module.exports=router