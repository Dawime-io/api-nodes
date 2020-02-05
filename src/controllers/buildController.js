// External Dependancies
const boom = require('boom')
const IncomingForm = require('formidable').IncomingForm
const fileUpload = require('fastify-file-upload')
// Get Data Models
const Car = require('../models/Builds')
const fs = require('fs')



// Get all cars
exports.getBuilds = async (req, reply) => {
  try {
    const cars = await Car.find()
    return cars
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getOnebuilds = async (req, reply) => {
  try {
    const id = req.params.id
    const car = await Car.findById(id)
    console.log(car)
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addbuilds = async (req, reply) => {
  try {
    const car = new Car(req.body)
    console.log(req.body)
    console.log(car)
    return car.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updatebuilds = async (req, reply) => {
  try {
    const id = req.params.id
    const car = req.body
    const { ...updateData } = car
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deletebuilds = async (req, reply) => {
  try {
    const id = req.params.id
    const car = await Car.findByIdAndRemove(id)
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}


exports.uploadbuild = async (req, reply) => {
  // some code to handle file
        console.log(req)
  console.log("------------------------BONJOUR-----------------------")
  const files = req.body
   console.log("------------------------FILES-----------------------")
  console.log(files)
   var imagedata = files.image.data
  // var imagedata = ''
  //   req.setEncoding('binary')

  //   req.on('data', function(chunk){
  //       imagedata += chunk
  //   })
  //   req.on('end', function(){
  //     fs.writeFile('logo.png', imagedata, 'binary', function(err){
  //         if (err) throw err
  //         console.log('File saved.')
  //     })
  // })

  fs.writeFile('test.jpg',imagedata,'binary',function(err){
    if (err) throw err
    else console.log('image enregistrer.')});

  // let fileArr = []
  // for(let key in files){
  //   fileArr.push({
  //     name: files[key].name,
  //     mimetype: files[key].mimetype
  //   })
  // }
  // reply.send(fileArr)
}
