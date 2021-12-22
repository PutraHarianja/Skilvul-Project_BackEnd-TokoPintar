const express = require('express')

const UserController = require("../controllers/user.controller")

const router = express.Router()

// Create User
router.post('/users', UserController.createNewUser)
// Get User by ID
router.get('/users/:id_user', UserController.getUserbyId)
// Update User
router.put('/users/:id_user', UserController.updateUserId)
// List User
router.get('/users', UserController.getAllUsers)
// Delete User
router.delete('users/:id_user', UserController.deleteUserbyId)

module.exports = router