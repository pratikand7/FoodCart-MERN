const express = require("express");
const productRoute = require('./controllers/product');
const cartRoute = require('./controllers/cart');
const authRoute = require('./controllers/login')
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send("Hello World");
});

const mongoURI = process.env.MONGO_URI;
  mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB Atlas:", error));

app.use(productRoute);
app.use(cartRoute);
app.use(authRoute);
app.use('/uploads', express.static('uploads'));

app.listen(5000, () => {
    console.log("Server is running...")
});