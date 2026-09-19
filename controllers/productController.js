const Product = require("../models/Product");

// GET all products
const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

// GET single product
const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
};

// POST create product
const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
};

module.exports = {
    getProducts,
    getProduct,
    createProduct
};