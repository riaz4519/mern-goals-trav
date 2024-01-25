import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../model/userModel.js'

// @desc Register new users
// @route POST /api/users
// @access Public

export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // check is user exists
  const userExists = await User.findOne({ email: email })

  if (userExists) {
    res.status(404)
    throw new Error('User already exists')
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  // create user
  const user = await User.create({
    name: name,
    email: email,
    password: hashPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc login  users
// @route POST /api/users/login
// @access Public

export const loginUser = asyncHandler(async (req, res, next) => {
  res.status(200).send({
    message: 'login user',
  })
})

// @desc Get user data
// @route POST /api/users/me
// @access Private

export const getMe = asyncHandler(async (req, res, next) => {
  res.status(200).send({
    message: 'get me',
  })
})
