const OrderModel = require('../Models/order.model')

class OrderController {

    static async createNewOrder(req, res) {
        try {
            const newOrder = new OrderModel({
                total: req.body.total,
                user_id: req.body.user_id,
                items: req.body.items
            });

            newOrder.save()
            return res.status(200).send({
                message: 'order created successfully',
                data: newOrder
            })
            } catch (error) {
                console.log(error)
                res.status(500).send({ err: error })
            }
        }

    static async getOrderbyId(req, res) {
        OrderModel.findById({ _id: req.params.id_order }, (error, result) => {
            if (error) {
                return res.send({
                    message: 'no order found'
                })
            } else {
                res.status(200).send({
                    message: 'data retrieved',
                    data: result
                })
            }
        }).populate([
            "user_id",
            "items.product_id"
        ])
    }

    static async updateOrderbyId(req, res) {
        OrderModel.findByIdAndUpdate({ _id: req.params.id_order }, {
            total: req.body.total,
            user_id: req.body.user_id,
            items: req.body.items
        }, (error, result) => {
            if (error) {
                console.log(error)
                return res.send({
                    message: 'no order found, update action failed'
                })
            } else {
                res.status(200).send({
                    message: 'update order book success',
                    data: req.body
                })
            }
        })
    }

    static async getAllOrdersbyIdUser(req, res) {
        console.log(req.loggedUser)

        OrderModel.find({}, (error, result) => {
            if (error)
                return res.send(error);

            res.json(result)
        })
    }

    static async deleteOrderbyId(req, res) {
        OrderModel.deleteOne({ _id: req.params.id_order }, (error, result) => {
            if (error) {
                res.status(400).send({
                    message: 'no id found, delete action failed'
                })
            } else {
                res.status(200).send({
                    message: `delete order ${req.params.id_order} successfully`
                })
            }
        })
    }

}


module.exports = OrderController