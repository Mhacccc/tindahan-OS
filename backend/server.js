require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');


const app = express();
const PORT = process.env.PORT||4000



app.use(express.json());
app.use(cors());


app.use('/api/products',productRoutes)

app.get('/',(req,res)=>{
    res.send('<h1>Hello Welcome!</h1>')
})

async function mongooseConnect(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT,()=>{
        console.log("Hello this is the backend, Listening on Port "+ PORT);
    })
    }catch(err){
        console.log("Failed", err);
    }    
};

mongooseConnect();