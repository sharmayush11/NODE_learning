require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connected");

        const products = await Product.find({
            price: { $lt: 10000 }
        });
        console.log("Products under ₹10,000:");

        if (products.length === 0) {
            console.log("No products found.");
        } else {
            console.log(products);
        }

    } catch (error) {
        console.log("Error:", error.message);
    }
}

main();