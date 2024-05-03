const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    rating:{
        type : Number,
        require : true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    picture:{
        type:String,
        require:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('movies',movieSchema)