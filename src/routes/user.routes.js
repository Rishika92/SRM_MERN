const express = require('express');
const userHandler = require('../handlers/user.handler');

const router = express.Router();

router.get('/', userHandler.getUsers);
router.get('/:id', userHandler.getUserById);
router.post('/', userHandler.createUser);
router.put('/:id', userHandler.updateUser);
router.delete('/:id',userHandler.deleteUser);
module.exports = router;