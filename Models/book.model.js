const mongoose = require('mongoose')

// Create schemas
const bookSchema = new mongoose.Schema({
    // "id": "string, unique",
    // "name": "string",
    // "author": "string",
    // "rating": "long",
    // "reviews": "integer",
    // "year": "integer",
    // "price": "long",
    // "genre": "string",
    // "quantity": "integer",
    // "url": "string",
    // "deskripsi": "string"

    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: mongoose.Types.Decimal128,
        default: 0.00,
    },
    reviews: {
        type: Number,
    },
    year: {
        type: Number,
        required: true,
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
})

const bookModel = mongoose.model('Books', bookSchema)

module.exports = bookModel