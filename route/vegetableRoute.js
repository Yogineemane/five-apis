const route = require('express').Router()

const {getVegetable,postVegetable,putVegetable,deleteVegetable} = require("../controller/vegetableController")

route.get('/',getVegetable)
route.post('/',postVegetable)
route.put('/:id',putVegetable)
route.delete('/:id',deleteVegetable)

module.exports = route
