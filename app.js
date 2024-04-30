require("dotenv").config()
const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")

const movie = express()

movie.use(express.json())
movie.use(cors())

movie.get("/",(req,res)=>{
    res.send("Welcome")
})

movie.listen(process.env.PORT || 5000)

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
