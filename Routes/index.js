const express = require('express')

const userRoutes = require('./user')
const bookRouter = require('./book')
const auth = require('../Middleware/auth')


const router = express.Router()

router.get('/ping', (req, res) => {
    const ready = {
        status: "server is ready"
    }

    res.status(200).send(ready)
})

router.use("/users", userRoutes)

router.use("/books", auth.login, bookRouter)

module.exports = router