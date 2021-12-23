const express = require('express')

const UserController = require("../Controller/user.controller")

const router = express.Router()

// Create User
router.post('/', UserController.createNewUser)
// Get User by ID
router.get('/:id_user', UserController.getUserbyId)
// Update User
router.put('/:id_user', UserController.updateUserbyId)
// List User
router.get('/', UserController.getAllUsers)
// Delete User
router.delete('/:id_user', UserController.deleteUserbyId)

module.exports = router