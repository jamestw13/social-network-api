const {Thought} = require('../models');

const ThoughtController = {
  // THOUGHTS

  // GET to get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET to get a single thought by its _id
  getThoughtById(req, res) {
    Thought.findOne()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  // example data:
  // {"thoughtText": "Here's a cool thought...",
  //  "username": "lernantino",
  //  "userId": "5edff358a0fcb779aa7b118b"}
  addThought(req, res) {
    Thought.create()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // PUT to update a thought by its _id
  updateThought(req, res) {
    Thought.findOneAndUpdate()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to remove a thought by its _id
  removeThought(req, res) {
    Thought.findOneAndDelete()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // REACTIONS

  // POST to create a reaction stored in a single thought's reactions array field
  addReaction(req, res) {
    Thought.findOneAndUpdate()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to pull and remove a reaction by the reaction's reactionId value
  removeReaction(req, res) {
    Thought.findOneAndUpdate()
      .then(dbUserData => {})
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = ThoughtController;
