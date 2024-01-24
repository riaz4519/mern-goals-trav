import express from 'express'
const Router = express.Router()

import { getGoals } from '../controllers/goalController'

Router.route('/').get(getGoals)
// Router.route('/').post(createGoal)

export default Router
