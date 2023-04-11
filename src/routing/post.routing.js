const express = require("express");
const Post = require("../models/Post");
const {
    createPost,
    getAllPosts,
    deletePostById,
} = require("../controllers/post.controllers");

const router = express.Router();

router.post("/", createPost);

router.get("/", getAllPosts);

router.delete("/:id", deletePostById);

// get url file
router.get("/upload", async (req, res) => {
    res.json("hello");
});

// post file
router.post("/upload", async (req, res) => {
    console.log(req.files)
});
module.exports = router;
