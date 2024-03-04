const express = require ('express');
const { signup, signin, logout, userProfile} = require('../controllers/authController');
const router = express.Router();
const {isAuthenticated} = require('../middleware/auth');


// auth routes
// router.get('/', (req,res)=> {
//     res.send("Hello from Node JS");
// })
// api/signup
router.post('/signup', signup);

// api/signin
router.post('/signin', signin);

// api/logout
router.get('/logout', logout);

// api/me
router.get('/me',isAuthenticated, userProfile);

module.exports = router;
