const router = require('express').Router();

// require thought controllers
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('../controllers/thought-controller');

// /api/thoughts/
router.route('/').get(getAllThoughts).post(addThought);

// /api/thoughts/:thoughtId/
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions/').post(addReaction).delete(removeReaction);

module.exports = router;
