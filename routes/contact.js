const express = require('express')
const contactRouter = express.Router()

contactRouter.post('/', (req, res) => {
    const email = new Email(req.body)
    email.save((err, email) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(email)
    })
})

module.exports = contactRouter;