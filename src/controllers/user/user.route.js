const express = require('express')
const router = express.Router();
const userController = require('./user.controller')
const middlewareController = require('../auth/middleware.controller')

router.get('/', middlewareController.verifyToken, userController.getUser)
router.post('/signup', userController.createUser)
router.post('/login', userController.findUser)

module.exports = router