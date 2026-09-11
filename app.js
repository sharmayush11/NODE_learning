const express = require("express");
const app = express();

// Normal route
app.get("/test", (req, res, next) => {
    const error = new Error("Something went wrong");
    next(error);
});


// Error-handling middleware
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({
        message: "Internal Server Error"
    });
});


app.listen(3000, () => {
    console.log("Server started on port 3000");
});