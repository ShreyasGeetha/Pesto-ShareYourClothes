import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import  generateToken  from '../utils/generateToken.js'

// @desc Auth user and get token
// @route POST /api/users/login
// @access  public
const authUser = asyncHandler( async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })
  
  if (user && (await user.matchPassword(password))) {

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
//s3setup - aws user name
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
  console.log('this function is being called', req)
  const user = await User.findById(req.user._id)
// const { email } = req.body;
//   console.log('This is at Server', email, password)
//   const user = await await User.findOne({ email })
  // const user1 = await User.find()
  // console.log('will it print all users?', user1)
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

// @desc Update User Profile
// @route PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler( async (req, res) => {
 
  console.log('what does req.body has', req.body)
  const user = await User.findById(req.body.id)
  console.log('fetch?', user)
  // const user = await User.findOne({email: 'test3@example.com'})
  // console.log('what does req.body has', user)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password   
    }
    
    const UpdatedUser = await user.save();
  console.log('fetch?', user)

    res.json({
      _id: UpdatedUser._id,
      name: UpdatedUser.name,
      email: UpdatedUser.email,
      isAdmin: UpdatedUser.isAdmin,
      token: generateToken(UpdatedUser._id)
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc Get All Users
// @route GET /api/users
// @access  private
const getUsers = asyncHandler( async (req, res) => {

  const users = await User.find()
  if (users) {
    res.json({
      users     
    })
  } else {
    res.status(404)
    throw new Error('No Users found')
  }
})

// @desc Delete user
// @route DELETE /api/users/:id
// @access  private/admin
const deleteUserById = asyncHandler( async (req, res) => {

  const user = await User.findById(req.body.userId)
  if (user) {
    await user.remove()
     const users = await User.find()
    res.json({
      users,
      message: 'User Removed'
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }

})

export {authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUserById}