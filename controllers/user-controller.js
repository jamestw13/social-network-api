const {User} = require('../models');

const UserController = {
  // USERS

  // GET all users
  getAllUsers() {},

  // GET a single user by its _id and populated thought and friend data
  getUserById() {},

  // POST a new user
  //   example data:
  //   {"username": "lernantino",
  //    "email": "lernantino@gmail.com"}
  addUser() {},

  // PUT to update a user by its _id
  updateUser() {},

  // DELETE to remove user by its _id
  removeUser() {
    // Remove a user's associated thoughts when deleted.
  },

  // FRIENDS

  // POST to add a new friend to a user's friend list
  addFriend() {},

  // DELETE to remove a friend from a user's friend list
  removeFriend() {},
};

module.exports = UserController;
