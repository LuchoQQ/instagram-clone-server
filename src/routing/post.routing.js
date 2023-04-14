const express = require("express");
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
router.get("/file/:key", async (req, res) => {});

// post file

module.exports = router;
