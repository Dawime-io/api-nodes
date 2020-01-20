// External Dependancies
const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  title: String,
  author: String,
  type: String,
  build: String,
  
})

module.exports = mongoose.model('Car', carSchema)