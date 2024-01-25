import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../model/userModel.js'

// @desc Register new users
// @route POST /api/users
// @access Public

export const registerUser = asyncHandler(async (req, res, next) => {
  res.status(201).send({
    message: 'user registered',
  })
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
