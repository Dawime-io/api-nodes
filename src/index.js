
// Require external modules
const mongoose = require('mongoose')
const routes = require('./routes')



// Connect to DB
mongoose.connect('mongodb+srv://test:test@api-nodes-vjf35.mongodb.net/test?retryWrites=true&w=majority')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))



// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  
  
 routes.forEach((route, index) => {
    fastify.route(route)
   })
  // Run the server!
  const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()