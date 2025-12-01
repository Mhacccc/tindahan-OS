require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const PORT = process.env.PORT||4000


module.exports = async function mongooseConnect(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT,()=>{
        console.log("Hello this is the backend, Listening on Port "+ PORT);
    })
    }catch(err){
        console.log("Failed", err);
    }    
};

