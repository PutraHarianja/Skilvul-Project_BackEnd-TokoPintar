const express = require('express')

const OrderController = require("../Controller/order.controller")

const router = express.Router()
const auth = require('../Middleware/auth')

// Create Order
router.post('/',OrderController.createNewOrder)
// Get Order by ID
router.get('/:id_order', OrderController.getOrderbyId)
// Update Order
router.put('/:id_order', OrderController.updateOrderbyId)
// List Order
router.get('/', OrderController.getAllOrdersbyIdUser)
// Delete Order
router.delete('/:id_order', auth.isAdmin,OrderController.deleteOrderbyId)

module.exports = router

