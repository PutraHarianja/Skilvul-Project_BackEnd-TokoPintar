const express = require('express')

const userRoutes = require('./user')
const bookRouter = require('./book')


const router = express.Router()

router.get('/ping', (req, res) => {
    const ready = {
        status: "server is ready"
    }

    res.status(200).send(ready)
})

router.use("/users", userRoutes)

router.use("/books", bookRouter)

module.exports = router