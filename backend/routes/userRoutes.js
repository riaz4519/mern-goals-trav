import express from 'express'
import {
  getMe,
  loginUser,
  registerUser,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const Router = express.Router()

Router.route('/').post(registerUser)
Router.route('/login').post(loginUser)
Router.route('/me').get(protect,getMe)

export default Router
