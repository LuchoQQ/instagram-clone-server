// Import packages
const express = require("express");
const cors = require("cors")
const { mongoose } = require("./src/libs/mongoose");
const morgan = require('morgan')


// Middlewares
const app = express();
app.use(morgan('dev'))
app.use(cors())
app.use(express.json());

// Routes

const userRouting = require("./src/routing/user.routing");
app.use("/users", userRouting);

const postRouting = require('./src/routing/post.routing')
app.use('/posts', postRouting)

// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
