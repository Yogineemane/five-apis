const route = require('express').Router()

const {getSerial,postSerial,putSerial,deleteSerial} = require("../controller/serialController")

route.get('/',getSerial)
route.post('/',postSerial)
route.put('/:id',putSerial)
route.delete('/:id',deleteSerial)

module.exports = route
