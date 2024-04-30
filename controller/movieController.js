const Movie = require("../model/movie")

exports.getMovie = async (req,res)=>{
    try {
        const data = await Movie.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}