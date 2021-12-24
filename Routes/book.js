const express = require('express')

const BookController = require("../Controller/book.controller")

const router = express.Router()
const auth = require('../Middleware/auth')

// Create User
router.post('/', auth.isAdmin,BookController.createNewBook)
// Get User by ID
router.get('/:id_book', BookController.getBookbyId)
// Update User
router.put('/:id_book', auth.isAdmin,BookController.updateBookbyId)
// List User
router.get('/', BookController.getAllBooks)
// Delete User
router.delete('/:id_book', auth.isAdmin,BookController.deleteBookbyId)

module.exports = router