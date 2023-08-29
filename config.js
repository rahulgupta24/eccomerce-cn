// config.js
require('dotenv').config()
console.log('.env.MONGODB_URI', process.env.MONGODB_URI)
module.exports = {
    mongodbURI: process.env.MONGODB_URI, // Your MongoDB URI
};
