const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required:true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        posts: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
        avatar: {
            type: String,
            default: null,
        },
        follower: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        following: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        saved_posts: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
