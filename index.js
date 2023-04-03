// Import packages
const express = require("express");
const cors = require("cors")
const { mongoose } = require("./src/libs/mongoose");

// Middlewares
const app = express();
app.use(cors())
app.use(express.json());

// Routes

const userRouting = require("./src/routing/user.routing");
app.use("/users", userRouting);

/* app.use("/", (req, res) => {
    res.json("backend working c:");
});
 */
// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
