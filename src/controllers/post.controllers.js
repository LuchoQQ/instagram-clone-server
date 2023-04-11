const Post = require("../models/Post");

const createPost = async (req, res) => {
    const { post_owner, description } = req.body;
    console.log(req)
    try {
        await Post.create({
            post_owner,
            description,
            image,
        });

        return res.status(201).json({
            status: 201,
            message: "Post created sucessfull",
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 500,
            message: "Post not created",
        });
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
