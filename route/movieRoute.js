const route = require('express').Router()

 const {getMovie,postMovie,putMovie,deleteMovie} = require("../controller/movieController")

 route.get('/',getMovie)
 route.post('/',postMovie)
 route.put('/:id',putMovie)
 route.delete('/:id',deleteMovie)

 module.exports = route