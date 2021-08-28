const mongoose = require('mongoose')

const URI = 'mongodb://localhost/mern'

mongoose.connect(URI)
  .then( db  => console.log('database conetado '))
  .catch(err => console.log('error en conexion' , err))


module.exports =  mongoose