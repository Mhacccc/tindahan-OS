const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const mongooseConnect = require('./config/db')

const app = express();
const PORT = process.env.PORT||4000


app.use(express.json());
app.use(cors());


app.use('/api/products',productRoutes)

app.get('/',(req,res)=>{
    res.send('<h1>Hello Welcome!</h1>')
})


mongooseConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
