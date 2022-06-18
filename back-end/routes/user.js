const {Router} = require("express")
const router = new Router();

const {auth} = require('../middlewares/auth');
const userController = require("../controllers/userController")

//@desc get login page
//@route GET /user/login
router.get('/login', userController.getLogin)

//@desc Handle login 
//@route POST /user/login
router.post('/login', userController.handleLogin , userController.rememberMe)

//@desc get signup page
//@route GET /user/signup
router.get('/signup', userController.getSignUp)

//@desc handle sign up
//@route POST /user/signup
router.post('/signup', userController.handleSignUp)

module.exports = router;