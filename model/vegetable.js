const mongoose = require('mongoose')

const vegetableSchema=new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    price:{
        type: String,
        require : true
    },
    benefits:{
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

module.exports = mongoose.model('vegetables',vegetableSchema)