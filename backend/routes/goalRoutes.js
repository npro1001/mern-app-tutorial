const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/getController')

// Routes
router.route('/').get(getGoals).post(setGoal)
// router.get('/', getGoals)
// router.post('/', setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)


module.exports = router