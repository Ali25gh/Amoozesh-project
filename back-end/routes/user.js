const {Router} = require("express")
const router = new Router();

const userController = require("../controllers/userController")

router.get('/login', userController.getLogin)

router.get('/signup', userController.getSignUp)

router.post('/signup', userController.handleSignUp)

module.exports = router;