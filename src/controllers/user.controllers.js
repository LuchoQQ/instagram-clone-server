const User = require("../models/User");

const getUsers = async (req, res) => {
    const users = await User.find();

    return res.json({
        users,
    });
};

const createUser = async (req, res) => {
    const { username, firstName, lastName, email, password } = req.body;
    try {
        const user = await User.create({
            username,
            firstName,
            lastName,
            email,
            password,
        });
        return res.status(201).json({
            message: "User created sucessfull",
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "User not created",
        });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.json("Wrong User ID");
    try {
        const user = await User.findById(id);
        if (!user) return res.json("User not found");
        return res.json(user);
    } catch (error) {
        return res.json("User not found");
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.json("Wrong User ID");
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) return res.json("User not found");
        return res.json("User deleted sucessfull");
    } catch (error) {
        return res.status(500).json({
            error,
        });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, firstName, lastName, email, password } = req.body;
    if (!id) return res.json("Wrong User ID");

    try {
        const newUser = await User.findOneAndUpdate(id, req.body);
        return res.json("User updated sucessfull");
    } catch (error) {
        return res.status(500).json({
            error,
        });
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
};
