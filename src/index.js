
// Require external modules
const mongoose = require('mongoose')
const routes = require('./routes')
const fileUpload = require('fastify-file-upload')
const static = require('fastify')()
const path = require('path')


// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/WolcenBuilds')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))


// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
    })

  
  fastify.register(fileUpload);
  fastify.register(require('fastify-cors'), { 
    origin: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']
  })
  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/', // optional: default '/'
  })
  



  // Declare a route
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  fastify.get('/img/:item', function (req, reply) {
    console.log('coucou');
    if (req.params.item != null ){
    reply.sendFile(req.params.item) // serving path.join(__dirname, 'public', 'myHtml.html') directly
    }else{
      reply.status(404)
    }
  })
  
  
 routes.forEach((route, index) => {
    fastify.route(route)
   })
  // Run the server!
  const start = async () => {
    try {
      await fastify.listen(80)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()