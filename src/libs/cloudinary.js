const { v2 } = require("cloudinary");

require("dotenv").config();

v2.config({
    cloud_name: "diylksocz",
    api_key: "494236277452514",
    api_secret: "X_F4O0fJVJdHK7yzGFUnJFk4DzA",
    secure: true,
});

const uploadImage = async (filePath) => {
    return await v2.uploader.upload(filePath, {
        folder: "replit",
    });
};

const deleteImage = async (publicId) => {
    return await v2.uploader.destroy(publicId);
};

module.exports = {
    uploadImage,
    deleteImage,
};
