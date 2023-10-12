const express=require('express')
const rootDir=require('../util/path')
const path=require('path')
exports.getAddProduct=(req,res,next)=>{
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="product"><input type="number" name="quantity"><button type="submit">Add product</button></form>')
    res.sendFile(path.join(rootDir,'views','add-product.html'))
}

exports.addproduct=(req,res,next)=>{
    console.log(JSON.parse(JSON.stringify(req.body)))
    res.redirect('/shop')
}

exports.getContactUs=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
}
exports.getSuccess=(req,res,next)=>{
    res.send('<h1>Form successfuly filled</h1>')
}