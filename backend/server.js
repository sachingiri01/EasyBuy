const express =require("express");
const cors=require('cors');
const dotenv=require('dotenv');
const Connectdb=require('./config/db');
const router=require('./routes')
const cookieParser = require('cookie-parser')
dotenv.config();
Connectdb();
const app =express();
const allowedOrigin = 'https://easybuy-live.vercel.app';
app.use(cors({
    origin:allowedOrigin,
    credentials: true
}));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",router);
const port =process.env.PORT||3000; 

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
