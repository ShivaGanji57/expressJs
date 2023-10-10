const express=require('express')
const path=require('path')
const router=express.Router();
const rootDir=require('../util/path')
router.get('/add-product',(req,res,next)=>{
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="product"><input type="number" name="quantity"><button type="submit">Add product</button></form>')
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/add-product',(req,res,next)=>{
    console.log(JSON.parse(JSON.stringify(req.body)))
    res.redirect('/shop')
})
router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
})
router.post('/success',(req,res,next)=>{
    res.send('<h1>Form successfuly filled</h1>')
})

module.exports=router