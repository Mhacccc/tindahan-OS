require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async function mongooseConnect(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the Database")
    }catch(err){
        console.log("Failed", err);
    }    
};

