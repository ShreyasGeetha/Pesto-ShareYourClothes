import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import  generateToken  from '../utils/generateToken.js'

// @desc Auth user and get token
// @route POST /api/users/login
// @access  public
const authUser = asyncHandler( async (req, res) => {
  const { email, password } = req.body;
  console.log('This is at Server', email, password)
  const user = await User.findOne({ email })
  
  if (user && (await user.matchPassword(password))) {
      console.log('Does it get userInfo', user)

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid Username and Password')
  }
})

// @desc Register a user
// @route POST /api/users
// @access  public
const registerUser = asyncHandler( async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User Exists')
  }

  const user = await User.create({
    name,
    email,
    password
  })

  if (user) {
    res.status(201)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
  
})

// @desc Get User Profile
// @route GET /api/users/profile
// @access  private
const getUserProfile = asyncHandler( async (req, res) => {
  
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,      
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {authUser, getUserProfile, registerUser}