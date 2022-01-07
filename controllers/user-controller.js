const {User} = require('../models');

const UserController = {
  // USERS

  // GET all users
  getAllUsers(req, res) {
    User.find()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET a single user by its _id and populated thought and friend data
  getUserById(req, res) {
    User.findOne()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // POST a new user
  //   example data:
  //   {"username": "lernantino",
  //    "email": "lernantino@gmail.com"}
  addUser(req, res) {
    User.create()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // PUT to update a user by its _id
  updateUser(req, res) {
    User.findOneAndUpdate()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to remove user by its _id
  removeUser(req, res) {
    User.findOneAndDelete()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
    // Remove a user's associated thoughts when deleted.
  },

  // FRIENDS

  // POST to add a new friend to a user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to remove a friend from a user's friend list
  removeFriend(req, res) {
    User.findOneAndUpdate()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = UserController;
