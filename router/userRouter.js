const express = require('express')
const router = express.Router();

const userController = require('../controller/userController.js')
const loginRouter = require('../controller/loginController.js')
const login = require('../middleware/checkout.js')


const checkin = require('../middleware/checkRegister.js')

router.get('/', userController.getUser);
router.get('/shop', userController.getShop);
router.get('/product/:ID', userController.getProduct);
router.get('/test', userController.getTest);
router.get('/why', userController.getWhy);
router.get('/contact', userController.getContact);

router.get('/login',  loginRouter.login);
router.post('/login', loginRouter.postLogin);
router.get('/register', loginRouter.getRegister);
router.post('/Register', checkin.requireRegister,loginRouter.postRegister);

router.get('/search', userController.getSearch)

module.exports = router;