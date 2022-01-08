const {Thought} = require('../models');

const ThoughtController = {
  // THOUGHTS

  // GET get all thoughts
  getAllThoughts(req, res) {
    // Query collection for thoughts
    Thought.find()
      // Show pertinent reaction information
      .populate({
        path: 'reactions',
      })
      .select('-__v')
      // Send back response
      .then(dbThoughtData => res.json(dbThoughtData))
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET to get a single thought by its _id
  getThoughtById({params}, res) {
    // Query collection for thoughts
    Thought.findOne({_id: params.thoughtId})
      // Show pertinent reaction information
      .populate({
        path: 'reactions',
        select: '-__v',
      })
      .select('-__v')
      .then(dbThoughtData => {
        // Data not found error handling
        if (!dbThoughtData) {
          res.status(404).json({message: 'No thought found with that id.'});
          return;
        }
        // Send back response
        res.json(dbThoughtData);
      })
      // Generic error handling
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
    // Query collection for thoughts
    Thought.create(body)
      // Send back response
      .then(dbThoughtData => res.json(dbThoughtData))
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // PUT to update a thought by its _id
  updateThought({params, body}, res) {
    // Query collection for thoughts
    Thought.findOneAndUpdate({_id: params.thoughtId}, body, {new: true})
      .select('-__v')
      .then(dbThoughtData => {
        // Data not found error handling
        if (!dbThoughtData) {
          res.status(404).json({message: 'No thought found with that id.'});
          return;
        }
        // Send back response
        res.json(dbThoughtData);
      })
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to remove a thought by its _id
  removeThought({params}, res) {
    // Query collection for thoughts
    Thought.findOneAndDelete({_id: params.thoughtId})
      .select('-__v')
      .then(dbThoughtData => {
        // Data not found error handling
        if (!dbThoughtData) {
          res.status(404).json({message: 'No thought found with that id.'});
          return;
        }
        // Send back response
        res.json(dbThoughtData);
      })
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // REACTIONS

  // POST to create a reaction stored in a single thought's reactions array field
  addReaction({params, body}, res) {
    // Query collection for thoughts
    Thought.findOneAndUpdate({_id: params.thoughtId}, {$push: {reactions: body}}, {new: true})
      .select('-__v')
      .then(dbThoughtData => {
        // Data not found error handling
        if (!dbThoughtData) {
          res.status(404).json({message: 'No thought found with that id.'});
          return;
        }
        // Send back response
        res.json(dbThoughtData);
      })
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE to pull and remove a reaction by the reaction's reactionId value
  removeReaction({params, body}, res) {
    // Query collection for thoughts
    Thought.findOneAndUpdate({_id: params.thoughtId}, {$pull: {reactions: {reactionId: body.reactionId}}}, {new: true})
      .select('-__v')
      .then(dbThoughtData => {
        // Data not found error handling
        if (!dbThoughtData) {
          res.status(404).json({message: 'No thought found with that id.'});
          return;
        }
        // Send back response
        res.json(dbThoughtData);
      })
      // Generic error handling
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = ThoughtController;
