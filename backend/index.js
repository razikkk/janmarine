import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import adminRoute from './route/adminRoute.js'
import cors from 'cors'
import "./config/cloudinary.js";

dotenv.config()


connectDB()

const app = express()

app.use(cors({origin: "http://localhost:5173", credentials:true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/admin', adminRoute)


app.get('/',(req,res)=>{
    res.send('server is running')
})

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})