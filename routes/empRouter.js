const express = require('express')
const router  = express.Router()
const empController = require('../controller/empController')
const jwtAuthMiddleware = require('../jwtAuthMiddleware')

// emp creation - simple 
// emp update - (middleware) - payload / 

// ROUTERS
router.post('/signup',empController.insertEmp)
router.post('/login',empController.validateEmp)
router.put('/update',jwtAuthMiddleware.verifyToken,empController.updatePassword)
// router.put('/update',empController.updatePassword)




module.exports = router
