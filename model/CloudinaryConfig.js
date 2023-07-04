const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'avatars',
      format: async (req, file) => 'png',
      public_id: (req, file) => file.originalname,
      transformation: [
        { width: 200, height: 200, crop: 'limit', gravity: 'faces' }, // Original size
        { width: 100, height: 100, crop: 'limit', gravity: 'faces' }, // Medium size
        { width: 50, height: 50, crop: 'limit', gravity: 'faces' }, // Small size
      ],
    },
  });
  module.exports = {
    storage,
    cloudinary
};