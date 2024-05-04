const Serial = require("../model/serial")

exports.getSerial = async (req,res)=>{
    try {
        const data = await Serial.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postSerial = async (req,res)=>{
    try {
        const data = await Serial.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putSerial = async (req,res)=>{
    try {
        const data = await Serial.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteSerial = async(req,res)=>{
    try {
        const data = await Serial.findByIdAndDelete(req.param.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}