const userService = require('../services/user.services');

const getUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
};

const getUserById = (req, res) => {
    const user = userService.getUserById(req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
};

const createUser = (req, res) => {
    const { id, name, email } = req.body;

    const user = userService.createUser(
        id,
        name,
        email
    );

    res.status(201).json(user);
};
const updateUser = (req, res) => {

    const user = userService.updateUser(
        req.params.id,
        req.body
    );

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
};

const deleteUser = (req, res) => {

    const deleted =
        userService.deleteUser(
            req.params.id
        );

    if (!deleted) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json({
        message: "User deleted successfully"
    });
};
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};