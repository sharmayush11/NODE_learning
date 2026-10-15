const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");

app.use(express.json());

// Product routes
app.use("/products", productRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
    console.log(err.message);

    res.status(500).json({
        message: "Internal Server Error"
    });
});

// Server start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});