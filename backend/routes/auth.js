const express = require('express');    
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');      
const getuser = require('../middleware/getuser');

const JWT_SECRETE = 'Samreenisagoodgir@l';  


//1st Route
//Create a User using: POST "api/auth/createuser". No login required. 
router.post( '/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),      
    body('email', 'Enter a valid  email').isEmail(),
    body('password').isLength({ min: 5 }),
    ], 
   async (req, res)=>{
    let success = false;                  
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ success, errors: errors.array() });
        }

    /* Check whether the user with same email exsits already.*/
    try{
        let user = await User.findOne({email: req.body.email})    
        if (user){        
          return res.status(400).json({ success, error: "User with this Email already exists" });
        }

        /*..........CREATING NEW USER..........*/
          const salt = await bcrypt.genSalt(10);    
          const securePasssword = await bcrypt.hash(req.body.password, salt);
          user = await User.create({      
          name: req.body.name,
          email: req.body.email,
          password: securePasssword,
        }); 

        /*For returning token to user login second time.*/
          const data ={
            user:{
              id: user.id
            }
          }
          const authToken = jwt.sign(data, JWT_SECRETE);   
          success = true;
          res.json({success, authToken});   
          
      }catch(error){
          console.error(error.message);   
          res.status(500).send("Internal Server Error");   
      }       
})





//2nd Route
//Authenticat a User using: POST "api/auth/login". No login required. 
router.post( '/login', [
  body('email', 'Enter a valid  email').isEmail(),    
  body('password', 'Password cannot be blank').exists(),
  ], 
 async (req, res)=>{

    let success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;   
    try {      
      let user = await User.findOne({email});
      if(!user){
        success = false;
        return res.status(400).json({ error: "Enter correct credentials"});
      }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      return res.status(400).json({success, error: "Enter correct credentials"});
    }

    const data ={
      user:{
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRETE);   
    success = true;
    res.json({success, authToken});

  } catch (error) {
      console.error(error.message);   
      res.status(500).send("Internal Server Error"); 
  }
});


//3rd Route
//Get User logged in details using: POST "api/auth/getuser". Login required.
router.post( '/getuser', getuser, async (req, res)=>{

  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("password");
    res.send(user);

  } catch (error) {
      console.error(error.message);   
      res.status(500).send("Internal Server Error"); 
  }

})

module.exports = router;