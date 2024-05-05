const route = require('express').Router()

const { getLaptop, postLaptop, putLaptop, deleteLaptop } = require("../controller/laptopController")

route.get('/', getLaptop)
route.post('/', postLaptop)
route.put('/:id', putLaptop)
route.delete('/:id', deleteLaptop)

module.exports = route