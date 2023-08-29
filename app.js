// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { mongodbURI } = require('./config');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true });
require('dotenv').config();
// Routes
app.use('/products', productRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
