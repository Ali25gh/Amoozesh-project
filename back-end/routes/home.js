const {Router} = require('express');
const router = new Router();

const homeController= require('../controllers/homeController');

//@desc get home page
//@route GET /
router.get("/", homeController.getHomePage)

module.exports = router;