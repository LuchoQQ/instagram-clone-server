const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        
    },
    {
        timestamps: true,
    }
);


module.exports = db.model('Post', postSchema);