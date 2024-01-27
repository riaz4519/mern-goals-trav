import asyncHandler from 'express-async-handler'
import Goal from '../model/goalModel.js'
import User from '../model/userModel.js'

// @desc Get GOALS
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user._id })

  res.status(200).json({ goals })
})
// @desc SET GOALS
// @route POST /api/goals
// @access Private
export const setGoal = asyncHandler(async (req, res) => {
  const { text } = req.body

  if (!text) {
    res.status(400)
    throw new Error('Please add a text field ')
  }

  const goal = await Goal.create({ text, user: req.user._id })

  res.status(200).json(goal)
})
// @desc Update GOALS
// @route PUT /api/goals
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(404)
    throw new Error('Goal not found')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (goal.user.id.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal)
})
// @desc Delete GOALS
// @route Delete /api/goals
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(404)
    throw new Error('Goal not found')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (goal.user.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await goal.deleteOne()

  res.status(200).json({
    id: req.params.id,
  })
})
