const {User} = require('../models');

const UserController = {
  // USERS

  // GET all users
  getAllUsers(req, res) {
    // Query collection for users
    User.find()
      // Show pertinent friend and thought information
      .populate({
        path: 'friends',
        select: '-__v',
      })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v')
      // Send back response
      .then(dbUserData => res.json(dbUserData))
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET a single user by its _id and populated thought and friend data
  getUserById({params}, res) {
    // Query collection for users
    User.findOne({_id: params.userId})
      // Show pertinent friend and thought information
      .populate({
        path: 'friends',
        select: '-__v',
      })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v')
      .then(dbUserData => {
        // Data not found error handling
        if (!dbUserData) {
          res.status(404).json({message: 'No user found with that id.'});
          return;
        }
        // Send back response
        res.json(dbUserData);
      })
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // POST a new user
  //   example data:
  //   {"username": "lernantino",
  //    "email": "lernantino@gmail.com"}
  addUser({body}, res) {
    // Query collection for users
    User.create(body)
      // Send back response
      .then(dbUserData => res.json(dbUserData))
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // PUT to update a user by its _id
  updateUser({params, body}, res) {
    // Query collection for users
    User.findOneAndUpdate({_id: params.userId}, body, {new: true, runValidators: true})
      .select('-__v')
      .then(dbUserData => {
        // Data not found error handling
        if (!dbUserData) {
          res.status(404).json({message: 'No user found with that id.'});
          return;
        }
        // Send back response
        res.json(dbUserData);
      })
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to remove user by its _id
  removeUser({params}, res) {
    // Query collection for users
    User.findOneAndDelete({_id: params.userId})
      .then(dbUserData => {
        // Data not found error handling
        if (!dbUserData) {
          res.status(404).json({message: 'No user found with that id.'});
          return;
        }
        // Send back response
        res.json(dbUserData);
      })
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
    // Remove a user's associated thoughts when deleted.
  },

  // FRIENDS

  // POST to add a new friend to a user's friend list
  addFriend({params}, res) {
    // Query collection for users
    User.findOneAndUpdate({_id: params.userId}, {$push: {friends: params.friendId}}, {new: true})
      .select('-__v')
      .then(dbUserData => {
        // Data not found error handling
        if (!dbUserData) {
          res.status(404).json({message: 'No user found with that id.'});
          return;
        }
        // Send back response
        res.json(dbUserData);
      })
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to remove a friend from a user's friend list
  removeFriend({params}, res) {
    // Query collection for users
    console.log(params.userId, params.friendId);
    User.findOneAndUpdate({_id: params.userId}, {$pull: {friends: params.friendId}}, {new: true})
      .select('-__v')
      .then(dbUserData => {
        // Data not found error handling
        if (!dbUserData) {
          res.status(404).json({message: 'No user found with that id.'});
          return;
        }
        // Send back response
        res.json(dbUserData);
      })
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = UserController;
