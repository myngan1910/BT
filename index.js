const express = require('express')
const path = require('path')
const app = express()
var bodyParser = require('body-parser')
  const {PrismaClient} = require('@prisma/client')

const { userInfo } = require('os')
const { name } = require('ejs')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const router = require('./router/userRouter.js')
const adRouter = require('./router/adminRouter.js')
const requireLogin = require('./middleware/checkout.js')

const client = new PrismaClient();
const port = 3000



app.use('/', express.static(path.join(__dirname, 'profile')))
app.set('view engine', 'ejs')
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
})); 
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

app.use('/',router)
app.use('/admin', requireLogin.requireLogin, requireLogin.Login, adRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })