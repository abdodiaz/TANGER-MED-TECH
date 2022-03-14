const {Router}=require('express');
const router = Router();
//require controllers
const authController = require('../Controllers/authController')
const {generateAccessToken,validateToken}=require('../middleware/AuthJwt')


router.post('/signup', async (req, res) => {
  let register= await authController.signup_post(req.body)
    res.json(register)
})

let secretKey = "abc123";

router.post('/login', async (req,res) => {
    let token = ''
    console.log(req.body); 
    let {result} = await authController.login_post(req.body)
    if (_id && email && password ) {
        token = generateAccessToken({ _id, email, password }, secretKey, "admin")
    }
    res.json(password)
})

module.exports=router;