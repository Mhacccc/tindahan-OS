const Product = require('../models/Product')
const mongoose = require('mongoose')

// Get all products
const getProducts = async (req,res) => {

    try{
        const product = await Product.find({})
        res.status(200).send(product)

    }catch(error){
        res.status(400).json({
            error:error.message
        })
    }

}


// Get a product
const getProduct = async (req,res)=>{
    
    const {id} = req.params

    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({
            error: "Invalid ID"
        })
    }

    try{
        const product = await Product.findById(id)


        if(!product){
            return res.status(404).json({
            error:"No such Product"})
        }
        return res.status(200).send(product)

    }catch(error){
        res.status(400).json({
            error:error.message
        })
    }
}

// Add a product
const addProduct = async (req,res) => {

    try{
        const productReq = await Product.create({...req.body})
        res.status(200).json(productReq)

    }catch(error){
        res.status(400).json({error:error.message})
    }
}

// Delete a product
const deleteProduct = async (req,res)=>{

    const {id} = req.params

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({
            error: "Invalid ID"
        })
    }

    try{
        const productReq = await Product.findByIdAndDelete(id)
        if(!productReq){
            return res.status(404).json({
                error: "No such Product"
            })
        }
        res.json(productReq)
        

    }catch(error){
        res.json(400).json({
            error: error.message
        })
    }



}

// Update a product
const updateProduct = async (req,res)=>{

    const {id} = req.params

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({
            error: "Invalid ID"
        })
    }

    try{

        const productReq = await Product.findByIdAndUpdate(id,req.body,{
            new: true,
            runValidator: true
        })

        if(!productReq){
            return res.status(404).json({
                error: "No such product"
            })
        }
        res.json(productReq)
        
    }catch(error){
        res.status(404).json({
                error: error.message
            })
    }

}


module.exports = {
    addProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
}