// routes/goalRoutes.js
import express from 'express'
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js'

const router = express.Router()

// Define routes
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

export default router
