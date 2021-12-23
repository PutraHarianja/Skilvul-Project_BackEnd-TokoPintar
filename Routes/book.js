const express = require('express')

const BookController = require("../Controller/book.controller")

const router = express.Router()

// Create User
router.post('/', BookController.createNewBook)
// Get User by ID
router.get('/:id_book', BookController.getBookbyId)
// Update User
router.put('/:id_book', BookController.updateBookbyId)
// List User
router.get('/', BookController.getAllBooks)
// Delete User
router.delete('/:id_book', BookController.deleteBookbyId)

module.exports = router