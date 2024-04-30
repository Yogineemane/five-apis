const Movie = require("../model/movie")

exports.getMovie = async (req,res)=>{
    try {
        const data = await Movie.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postMovie = async (req,res)=>{
    try {
        const data = await Movie.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putMovie = async (req,res)=>{
    try {
        const data = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteMovie = async (req,res)=>{
    try {
        const data = await Movie.findByIdAndDelete(req.param.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}