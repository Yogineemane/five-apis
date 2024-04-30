require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProductRoute = require('./route/productRoute')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("HELLO")
})

app.use('/api/products1',ProductRoute)

app.listen(process.env.PORT || 5000)

async function mongoConnection() {
   try {
    const res = await mongoose.connect(process.env.DB)
    const data = await res.default
    console.log(data.STATES.connected);
   } catch (error) {
    console.log("Error",error.message);
   }
} 
mongoConnection()