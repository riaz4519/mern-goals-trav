import express from 'express'
import {
  getMe,
  loginUser,
  registerUser,
} from '../controllers/userController.js'
const Router = express.Router()

Router.route('/').post(registerUser)
Router.route('/login').post(loginUser)
Router.route('/me').get(getMe)

export default Router
