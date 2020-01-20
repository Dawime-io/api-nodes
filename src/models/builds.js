// External Dependancies
const mongoose = require('mongoose')

const buildSchema = new mongoose.Schema({
  title: String,
  author: String,
  type: String,
  build: String,
  
})

module.exports = mongoose.model('Builds', buildSchema)