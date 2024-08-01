const express = require("express");
const router = express.Router();
const {getUsers, getUser, postUser, updateUser, deleteUser} = require("../controller/userController")

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', postUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router