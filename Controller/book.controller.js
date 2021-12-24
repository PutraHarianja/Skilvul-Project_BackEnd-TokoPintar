const BookModel = require('../Models/book.model')

class BookController {

    static async createNewBook(req, res) {
        try {
            await BookModel.findOne({ name: req.body.name }).then((book) => {
                if (book) {
                    res.status(400).json({
                        message: 'book already exist'
                    })
                } else {
                    const newBook = new BookModel({
                        name: req.body.name,
                        author: req.body.author,
                        rating: req.body.rating,
                        review: req.body.review,
                        year: req.body.year,
                        price: req.body.price,
                        genre: req.body.genre,
                        quantity: req.body.quantity,
                        url: req.body.url,
                        deskripsi: req.body.deskripsi,
                    });

                    newBook.save()
                    return res.status(200).send({
                        message: 'book created successfully',
                        data: newBook
                    });
                }
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({ err: error })
        }
    }

    static async getBookbyId(req, res) {
        BookModel.findById({ _id: req.params.id_book }, (error, result) => {
            if (error) {
                return res.send({
                    message: 'no book found'
                })
            } else {
                res.status(200).send({
                    message: 'data retrieved',
                    data: result
                })
            }
        })
    }

    static async updateBookbyId(req, res) {
        BookModel.findByIdAndUpdate({ _id: req.params.id_book }, {
            name: req.body.name,
            author: req.body.author,
            rating: req.body.rating,
            review: req.body.review,
            year: req.body.year,
            price: req.body.price,
            genre: req.body.genre,
            quantity: req.body.quantity,
            url: req.body.url,
            deskripsi: req.body.deskripsi,
        }, (error, result) => {
            if (error) {
                console.log(error)
                return res.send({
                    message: 'no book found, update action failed'
                })
            } else {
                res.status(200).send({
                    message: 'update data book success',
                    data: req.body
                })
            }
        })
    }

    static async getAllBooks(req, res) {
        console.log(req.loggedUser)

        BookModel.find({}, (error, result) => {
            if (error)
                return res.send(error);

            res.json(result)
        })
    }

    static async deleteBookbyId(req, res) {
        BookModel.deleteOne({ _id: req.params.id_book }, (error, result) => {
            if (error) {
                res.status(400).send({
                    message: 'no id found, delete action failed'
                })
            } else {
                res.status(200).send({
                    message: `delete data ${req.params.id_book} successfully`
                })
            }
        })
    }

}


module.exports = BookController