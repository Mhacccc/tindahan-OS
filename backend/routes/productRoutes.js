const express = require('express') ;

const router = express.Router();
const {addProduct} = require('../controllers/productController') 

router.get('/',(req,res)=>{
    res.json({message: "GET ALL PRODUCTS"})  
})
router.get('/:id',(req,res)=>{
    res.json([{message: "GET SINGLE PRODUCT"}])  
})

router.post('/', addProduct)

router.delete('/:id',(req,res)=>{
    res.json({message: "DELETE A PRODUCT"})  
})
router.put('/:id',(req,res)=>{
    res.json({message: "UPDATE A PRODUCT"})
})



module.exports = router;
