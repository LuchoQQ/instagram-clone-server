const { uploadImage } = require("../libs/cloudinary");
const { uploadFile } = require("../libs/s3");
const Post = require("../models/Post");

const createPost = async (req, res) => {
    const { post_owner, description } = req.body;
    //console.log(req.files.image.tempFilePath)
    console.log(req.files);
    try {
        const result = await uploadImage(req.files.image.tempFilePath);
        await Post.create({
            post_owner,
            description,
            image: result.url,
        });
        return res.json("Created sucessfull");
    } catch (error) {
        console.log(error);
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        return res.json(posts);
    } catch (error) {
        return res.status(500).json({
            error: "Error finding posts",
        });
    }
};

const deletePostById = async (req, res) => {
    const { id } = req.params;

    try {
        await Post.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Deleted sucessfull",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Post not deleted",
        });
    }
};

module.exports = {
    createPost,
    getAllPosts,
    deletePostById,
};
