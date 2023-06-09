const express = require("express");
const {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser,
    authUser
} = require("../controllers/user.controllers");
const { userValidation } = require("../utils/validations/userValidation");

const router = express.Router();



router.get("/", getUsers);

router.post("/", userValidation, createUser);

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

router.put("/:id", userValidation, updateUser);

router.post("/auth", authUser)

//router.post("/auth/me", authMe)

module.exports = router;
