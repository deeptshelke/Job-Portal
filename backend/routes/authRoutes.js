const express = require ('express');
const { signup, signin, logout} = require('../controllers/authController');
const router = express.Router();


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

module.exports = router;
