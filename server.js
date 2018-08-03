const express = require('express')
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 5000;
const secret = process.env.SECRET || "Courtney is a babe"

app.use(express.static(path.join(__dirname, "client", "build")))

app.use(bodyParser.json())

app.use('/contact', require('./routes/contact'))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})