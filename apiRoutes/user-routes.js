const router = require('express').Router();

// require user controllers
const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend,
} = require('../controllers/user-controller');

// /api/users/
router.route('/').get(getAllUsers).post(addUser);

// /api/users/:userId/
router.route('/:userId').get(getUserById).put(updateUser).delete(removeUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
