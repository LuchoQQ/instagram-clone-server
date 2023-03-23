// Import packages
const express = require("express");
const { mongoose } = require("./src/libs/mongoose");


// Middlewares
const app = express();
app.use(express.json());




// Routes

const userRouting = require('./src/routing/user.routing')
app.use('/', userRouting)



// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
