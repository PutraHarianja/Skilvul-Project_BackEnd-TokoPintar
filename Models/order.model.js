const mongoose = require('mongoose')

var Schema = mongoose.Schema;

// Create schemas
const orderSchema = new mongoose.Schema({

    // "id": "string, unique",
    // "total": "double",
    // "user_id": "ObjectID",
    // "items": [
    //   {
    //     "product_id": "ObjectID",
    //     "name": "string",
    //     "description": "string",
    //     "price": "double"
    //   }
    // ]
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    items: [{
        product_id: {
            type: Schema.Types.ObjectId,
            ref: "Books",
        },
        total: {
            type: Number,
            default: "0.00"
        },
    }]
})

const orderModel = mongoose.model('Orders', orderSchema)

module.exports = orderModel