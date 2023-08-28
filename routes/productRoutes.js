// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
    createProduct,
    listProducts,
    deleteProduct,
    updateProductQuantity,
} = require('../controllers/productController');

// Create a new product
router.post('/create', createProduct);

// List all products
router.get('/', listProducts);

// Delete a product by ID
router.delete('/:id', deleteProduct);

// Update the quantity of a product
router.post('/:id/update_quantity', updateProductQuantity);

module.exports = router;
