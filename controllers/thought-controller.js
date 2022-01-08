const {Thought} = require('../models');

const ThoughtController = {
  // THOUGHTS

  // GET to get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .populate({
        path: 'reactions',
      })
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET to get a single thought by its _id
  getThoughtById({params}, res) {
    Thought.findOne({_id: params.thoughtId})
      .select('-__v')
      .populate({
        path: 'reactions',
        select: '-__v',
      })
      .then(dbThoughtData => res.json(dbThoughtData))
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
  addThought({body}, res) {
    Thought.create(body)

      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // PUT to update a thought by its _id
  updateThought({params, body}, res) {
    Thought.findOneAndUpdate({_id: params.thoughtId}, body, {new: true})
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to remove a thought by its _id
  removeThought({params}, res) {
    Thought.findOneAndDelete({_id: params.thoughtId})
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // REACTIONS

  // POST to create a reaction stored in a single thought's reactions array field
  addReaction({params, body}, res) {
    Thought.findOneAndUpdate({_id: params.thoughtId}, {$push: {reactions: body}}, {new: true})
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to pull and remove a reaction by the reaction's reactionId value
  removeReaction({params}, res) {
    Thought.findOneAndUpdate(
      {_id: params.thoughtId},
      {$pull: {reactions: {reactionId: params.reactionId}}},
      {new: true}
    )
      .select('-__v')
      .then(dbThoughtData => {
        console.log(dbThoughtData);
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = ThoughtController;
