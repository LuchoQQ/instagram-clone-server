const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.post("/", async (req, res) => {
    const { post_owner, description, image } = req.body;

    try {
        const post = await Post.create({
            post_owner,
            description,
            image,
        });

        return res.status(201).json({
            status: 201,
            message: "Post created sucessfull",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "User not created",
        });
    }

    return;
});

module.exports = router;
