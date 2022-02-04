const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')


const { db } = require('./database/db')

const { jwtMiddleware } = require('./services/jwtMiddleware')

const {
  sign_up,
  sign_up_2fa,
  sign_in,
  logout
} = require('./controllers')

const {
  render_signup_2fa,
  render_private,
  render_login
} = require('./views')


const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(session({ secret: 'supersecret', }))
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/', (req, res) => { res.render('signup.ejs') })

app.post('/sign-up', sign_up)

app.get('/sign-up-2fa', render_signup_2fa)

app.post('/sign-up-2fa', sign_up_2fa)


app.get('/login', render_login)

app.post('/login', sign_in)

app.get('/private', jwtMiddleware, render_private)

app.get('/logout', jwtMiddleware, logout)


//create database with tables if it doesn't exist
db()

app.listen(port, () => {
  console.log(`2FA Node app listening at http://localhost:${port}`)
})

