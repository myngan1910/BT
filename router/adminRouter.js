const express = require('express')
const router = express.Router();
const adminController = require('../controller/adminController.js')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './profile/assets/uploads')
  },
  filename: function (req, file, cb) {
    const suffix = file.mimetype.split('/');
    cb(null, `${file.fieldname}-${Date.now()}.${suffix[1]}`);
  }
})

const upload = multer({ storage: storage })

router.get('/', adminController.adminHome);

// USERS
router.get('/users',adminController.getUsers);
router.get('/create-users',adminController.createUsers);
router.post('/createusers', adminController.postcreUsers);
router.get('/user/:ID',adminController.detailUsers);
router.get('/usersdele/:ID',adminController.deleUsers);
router.post('/use/:ID',adminController.postUsers);


//ROLE
router.get('/role',adminController.getRole);
router.get('/create-role',adminController.createRole);
router.post('/createrole', adminController.postRole);
router.get('/ro/:ID',adminController.detailRole);
router.get('/rodele/:ID',adminController.deleRole);
router.post('/rol/:ID',adminController.viewRole);


// HOME
router.get('/home',adminController.getHome);
router.get('/create-home',adminController.createHome);
router.post('/createhome',upload.single('image'), adminController.postcreHome);
router.get('/hom/:ID',adminController.detailHome);
router.get('/homedele/:ID',adminController.deleHome);
router.post('/ho/:ID',upload.single('image'),adminController.postHome);

// SHOP
router.get('/shop',adminController.getShop);
router.get('/create-shop',adminController.createShop);
router.post('/createshop',upload.single('image'), adminController.postcreShop);
router.get('/shopp/:ID',adminController.detailShop);
router.get('/shopdele/:ID',adminController.deleShop);
router.post('/sho/:ID',upload.single('image'),adminController.postShop);

// REASON
router.get('/reason',adminController.getReason);
router.get('/create-reason',adminController.createReason);
router.post('/createreason',upload.single('icon'), adminController.postcreReason);
router.get('/rea/:ID',adminController.detailReason);
router.get('/readele/:ID',adminController.deleReason);
router.post('/reas/:ID',upload.single('icon'),adminController.postReason);


// TESTIMONIAL
router.get('/test',adminController.getTest);
router.get('/create-test',adminController.createTest);
router.post('/createtest', adminController.postcreTest);
router.get('/testti/:ID',adminController.detailTest);
router.get('/testdele/:ID',adminController.deleTest);
router.post('/testi/:ID',adminController.postTest);

// CONTACT
router.get('/contact',adminController.getCtc);
router.post('/createContact',adminController.postCtc);
router.get('/ctc/:ID',adminController.detailCtc);
router.get('/ctcdele/:ID',adminController.deleCtc);
router.post('/cont/:ID', adminController.viewCtc);

//SOCIAL
router.get('/social', adminController.getSocial)
router.get('/create-so',  adminController.createSocial)
router.post('/createsocial',upload.single('icon'), adminController.postcreSocial);
router.get('/so/:ID',adminController.detailSocial);
router.get('/socialdele/:ID',adminController.deleSocial);
router.post('/ss/:ID',upload.single('icon'), adminController.postSocial);
module.exports = router;