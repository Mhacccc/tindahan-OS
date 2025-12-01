const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const mongooseConnect = require('./config/db')

const app = express();


app.use(express.json());
app.use(cors());


app.use('/api/products',productRoutes)

app.get('/',(req,res)=>{
    res.send('<h1>Hello Welcome!</h1>')
})


mongooseConnect();
