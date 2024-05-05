const mongoose = require("mongoose")

const laptopSchema = new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    price:{
        type: String,
        require : true
    },
    specifications:{
        type: String,
        require: true
    },
    img:{
        type : String,
        require :true
    },
    isActive:{
        type :Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model('laptops',laptopSchema)