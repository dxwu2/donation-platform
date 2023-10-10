// hide keys from repo
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config() // loads all variables in .env and puts in process var
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const express = require('express')
const app = express()

app.set('view engine', 'ejs') // frontend is using ejs to render pages
app.use(express.static('public'))

app.listen(3000)