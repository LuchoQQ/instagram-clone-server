// Import packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
//const uploadRoute = require("./upload.route");
// Middlewares
const {mongoose} = require('./src/libs/mongoose')
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "./upload",
    })
);
// Routes

const userRouting = require("./src/routing/user.routing");
app.use("/users", userRouting);

const postRouting = require("./src/routing/post.routing");
app.use("/posts", postRouting);

// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
