const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
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

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;