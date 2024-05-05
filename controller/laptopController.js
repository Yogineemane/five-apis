const Laptop = require('../model/laptop')

exports.getLaptop = async (req,res)=>{
    try {
        const data = await Laptop.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postLaptop = async(req,res)=>{
    try {
        const data = await Laptop.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putLaptop = async(req,res)=>{
    try {
        const data = await Laptop.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteLaptop = async(req,res)=>{
    try {
        const data = await Laptop.findByIdAndDelete(req.param.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}