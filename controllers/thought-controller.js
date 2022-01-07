const {Thought} = require('../models');

const ThoughtController = {
  // THOUGHTS

  // GET to get all thoughts
  getAllThoughts() {},

  // GET to get a single thought by its _id
  getThoughtById() {},

  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  // example data:
  // {"thoughtText": "Here's a cool thought...",
  //  "username": "lernantino",
  //  "userId": "5edff358a0fcb779aa7b118b"}
  addThought() {},

  // PUT to update a thought by its _id
  updateThought() {},

  // DELETE to remove a thought by its _id
  removeThought() {},

  // REACTIONS

  // POST to create a reaction stored in a single thought's reactions array field
  addReaction() {},

  // DELETE to pull and remove a reaction by the reaction's reactionId value
  removeReaction() {},
};

module.exports = ThoughtController;
