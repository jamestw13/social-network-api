const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend,
} = require('../controllers/user-controller');
// /api/users

// /api/users/:userId/friends/:friendId

module.exports = router;
