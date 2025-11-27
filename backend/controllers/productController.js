const Product = require('../models/Product')

const addProduct = async (req,res) => {
    const {name,price,stock,category} = req.body
    try{

        const productReq = await Product.create({name,price,stock,category})
        res.status(200).json(productReq)

    }catch(error){
        res.status(400).json({error:error.message})
    }
}


//get all products
const getProducts = async (req,res) => {

}


module.exports = {
    addProduct
}