// controllers/productController.js
const Product = require('../models/productModel');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const { name, quantity } = req.body;
        const product = new Product({ name, quantity });
        await product.save();
        res.status(201).json({ data: {product} });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// List all products
const listProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ data: {products} });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update the quantity of a product
const updateProductQuantity = async (req, res) => {
    try {
        const { number } = req.query;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { $inc: { quantity: parseInt(number) } },
            { new: true }
        );
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ product, message: 'Updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createProduct, listProducts, deleteProduct, updateProductQuantity };
