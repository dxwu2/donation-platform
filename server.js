const express = require('express')
const app = express()

app.set('view engine', 'ejs') // frontend is using ejs to render pages
app.use(express.static('public'))

app.listen(3000)