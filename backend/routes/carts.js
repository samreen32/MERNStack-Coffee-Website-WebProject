const express = require('express');     //importing express
const router = express.Router();
const getuser = require('../middleware/getuser');
const Carts = require('../models/Carts');
const { body, validationResult } = require('express-validator');


//1st Route
//Get all Carts using: GET "api/carts/fetchallcarts". Login required.
router.get('/fetchallcarts', getuser, async (req, res)=>{
    try {
        const carts = await Carts.find({user: req.user.id});
        res.json(carts);

    } catch (error) {
        console.error(error.message);   
        res.status(500).send("Internal Server Error"); 
    }
   
})



//2nd Route
//Add a new Carts using: POST "api/carts/addcart". Login required.
router.post('/addcart', getuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),      
    body('amount', 'Enter a valid amount').isLength({ min: 1 })
    ], 
    async (req, res)=>{
    try {
        const {title, amount, price} = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const cart = new Carts ({
            title, amount, price, user: req.user.id
        })    
        const saveCart = await cart.save();    
        res.json(saveCart);


    } catch (error) {
        console.error(error.message);   
        res.status(500).send("Internal Server Error"); 
    }
})



//3rd Route
//Update an existing Carts using: PUT "api/carts/uppdatecart". Login required.
router.put('/uppdatecart/:id', getuser, async (req, res)=>{
    const {title, amount, price} = req.body;
    try {
        const newCart = {};    
        if(title) {newCart.title = title;}
        if(amount) {newCart.amount = amount;}
        if(price) {newCart.price = price;}

        let cart =await Carts.findById(req.params.id);       
        if(!cart){
            return res.status(404).send("Not Found");
        }
 
        if(cart.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed, This is not your cart");
        }    
        cart = await Carts.findByIdAndUpdate(req.params.id, {$set: newCart}, {new:true});
        res.json({cart});


    } catch (error) {
        console.error(error.message);   
        res.status(500).send("Internal Server Error"); 
    }
})



//4th Route
//Delete an existing Carts using: DELETE "api/carts/deletecart". Login required.
router.delete('/deletecart/:id', getuser, async (req, res)=>{
    
    try {
        let cart =await Carts.findById(req.params.id);       
        if(!cart){
        return res.status(404).send("Not Found");
        }
   
        if(cart.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed, This is not your cart to be deleting");
        } 

        cart = await Carts.findByIdAndDelete(req.params.id);
        res.json({"Success": "Cart has been deleted", cart: cart});

    } catch (error) {
        console.error(error.message);   
        res.status(500).send("Internal Server Error"); 
    }

})



module.exports = router;