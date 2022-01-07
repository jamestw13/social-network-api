const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('../controllers/thought-controller');

// /api/thoughts

// /api/thoughts/:thoughtId/reactions

module.exports = router;
