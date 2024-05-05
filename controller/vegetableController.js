const Vegetable = require("../model/vegetable")

exports.getVegetable = async (req,res)=>{
    try {
        const data = await Vegetable.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postVegetable = async (req,res)=>{
    try {
        const data = await Vegetable.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putVegetable = async (req,res)=>{
    try {
        const data = await Vegetable.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteVegetable = async (req,res)=>{
    try {
        const data = await Vegetable.findByIdAndDelete(req.param.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}