const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true,
    },

    price: {
        type: Number,
        default: null,
    },

    imagePath: { type: String }

});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;