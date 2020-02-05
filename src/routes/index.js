// Import our Controllers
const buildController = require('../controllers/buildController')

const routes = [
  {
    method: 'GET',
    url: '/api/builds',
    handler: buildController.getBuilds
  },
  {
    method: 'GET',
    url: '/api/builds/:id',
    handler: buildController.getOnebuilds
  },
  {
    method: 'POST',
    url: '/api/builds',
    handler: buildController.addbuilds,
    
  },
  {
    method: 'POST',
    url: '/api/upload',
    handler: buildController.uploadbuild,
    
  },
  {
    method: 'PUT',
    url: '/api/builds/:id',
    handler: buildController.updatebuilds
  },
  {
    method: 'DELETE',
    url: '/api/builds/:id',
    handler: buildController.deletebuilds
  }
]

module.exports = routes