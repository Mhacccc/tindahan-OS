const express = require('express') ;

const router = express.Router();
const {addProduct, getProduct, getProducts, updateProduct, deleteProduct} = require('../controllers/productController') 

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', addProduct)

router.delete('/:id', deleteProduct)

router.patch('/:id', updateProduct)



module.exports = router;
