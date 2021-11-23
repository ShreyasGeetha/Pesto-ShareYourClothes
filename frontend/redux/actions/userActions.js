import axios from "axios"
import { DISABLE_EMAIL_ERROR, DISABLE_PASSWORD_ERROR, EMAIL_ERROR } from "../types/FormTypes"
import {
  CLEAR_USER_EMAIL,
  CLEAR_USER_PASSWORD,
  EMAIL,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_EMAIL,
  USER_ISLOGGED,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_NAME,
  USER_PASSWORD,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS
} from "../types/userTypes"

export const login = (email, password, isLoggedIn) => async (dispatch) =>{
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      header: {
        'Content-Type': 'application/json'
      }      
    }
 
    const {data} = await axios.post(
      '/api/users/login',
      { email, password },
      config)

   
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

     dispatch({
      type: USER_ISLOGGED,
      payload: isLoggedIn
    })


    localStorage.setItem('userInfo', JSON.stringify(data))
    localStorage.setItem('isUserLogged', isLoggedIn)
    
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('isUserLogged');
  try {
    console.log('logout dispatcher')
  dispatch({
      type: USER_LOGOUT
  })
} catch (error) {
  
  }
}

export const setUserName = (userName) => (dispatch) => {
  try {
    dispatch({
      type: USER_NAME,
      payload: userName
    })
  } catch (error) {
    
  }
}


export const setEmail = (email) => (dispatch) => {
  console.log(email)
  try {
    dispatch({
      type: EMAIL,
      payload: email
    })
    dispatch({
      type: DISABLE_EMAIL_ERROR,
      payload: false
    })
  } catch (error) {
    
  }
}

export const clearEmail = (email) => (dispatch) => {
  console.log('Clear Email')
  try {
    dispatch({
      type: CLEAR_USER_EMAIL,
      payload: email      
    })
    console.log('Clear Email1')
  } catch (error) {
    
  }
}

export const clearPassword = (password) => (dispatch) => {
  console.log('Clear Password')
  try {
    dispatch({
      type: CLEAR_USER_PASSWORD,
      payload: password      
    })
  } catch (error) {
    
  }
}

export const setPassword = (password) => (dispatch) => {
  try {
    dispatch({
      type: USER_PASSWORD,
      payload: password
    })
    dispatch({
      type: DISABLE_PASSWORD_ERROR,
      payload: false
    })
  } catch (error) {
    
  }
}

export const register = (name, email, password) => async (dispatch) =>{
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })
    const config = {
      header: {
        'Content-Type': 'application/json'
      }      
    }

    const {data} = await axios.post(
      '/api/users',
      {name, email, password },
      config)
    
     dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
     })
    
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))    
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const getUserDetails = (email) => async (dispatch,getState) =>{
  try {

    dispatch({
      type: USER_DETAILS_REQUEST
    })

   const { userLogin:{userInfo} } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }      
    }
    const {data} = await axios.get(
      `/api/users/${email}`,
      config)
    
     dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data
     })
    
  } catch (error) {
    console.log('error', error.response)
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const updateUserProfile = (user) => async (dispatch,getState) =>{
  try {
    console.log(user)
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST
    })

   const { userLogin:{userInfo} } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }      
    }
    console.log(`token ${userInfo.token}, ${user}`)
   console.log('length', user.length)
    const {data} = await axios.put(
      `/api/users/profile`, user,
      config)
    
     dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data
     })
    
  } catch (error) {
    console.log('error', error.response)
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}