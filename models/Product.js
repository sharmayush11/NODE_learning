const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    price: {
        type: Number,
        required: true,
        min: 100
    },

    category: {
        type: String,
        default: "General",
        enum: ["Electronics", "Clothing", "Books"]
    },

    sku: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;