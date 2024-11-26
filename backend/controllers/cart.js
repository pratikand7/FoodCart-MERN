const express = require("express");
const Cart = require('../models/cart.models');

const route = express();
route.use(express.json());

route.get('/show-cart', async (req,res)=>{
    try {
        const carts = await Cart.find({});
        res.status(200).json(carts);
    } catch (error) {
       res.status(500).json({message: error.message}) 
    }
})

route.post('/add-to-cart', async (req, res) => {
    try {
      const { name, price, imagePath } = req.body;
      const cartItem = new Cart({ name, price, imagePath });
      await cartItem.save();
      res.status(201).send({ message: 'Product added to cart successfully!' });
    } catch (error) {
      res.status(500).send({ message: 'Error adding product to cart', error });
    }
  });

route.delete('/cart/:id', async (req,res) => {
  try {
    const { id } = req.params;
    const deletedData = await Cart.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ message: 'Data not found!' });
    }
    res.status(200).json({ message: 'Data deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

module.exports = route;