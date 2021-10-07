const express=require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute=require('./routes/users')
const authRoute=require('./routes/auth')


dotenv.config(); 
const PORT=5000;
const app=express();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser:true},()=>{
    console.log('Connected to MongoDB Server');
});


// middleware

app.use(express.json());
app.use(helmet());
app.use(morgan('dev')); 

app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);



app.get('/',(req,res)=>{
    res.send('welocome to homepage');
})


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})