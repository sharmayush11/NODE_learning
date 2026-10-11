const express = require("express");
const router = express.Router();

const { updateProduct } = require("../controllers/productController");

router.put("/:id", updateProduct);

module.exports = router;