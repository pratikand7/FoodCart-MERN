const express = require("express");
const multer = require('multer');
const Product = require('../models/product.models');

const route = express();
route.use(express.json());

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

route.get('/show-products', async (req,res) => {
    try {  
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
       res.status(500).json({message: error.message}) 
    }
});

route.post('/add-products', upload.single('image'), async (req,res)=>{
    try {
        const { name, price} = req.body;
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

        if (!imagePath) {
            return res.status(400).json({ message: 'Image is required' });
        }

        const product = new Product({ name, price, imagePath });
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

module.exports = route;