// Connect all reducers and add middleware here
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from './reducers/products/productReducer'
import { currentProductDetailsReducer, productDetailsReducer } from './reducers/products/productDetailsReducer'
import {cartReducer } from './reducers/cart/cartReducer'
import { showLoginFormReducer, showSignupFormReducer } from './reducers/cart/showLoginFormReducer';
import {
  userRegisterReducer, setEmailReducer, setPasswordReducer,
  userLoginReducer, setUserNameReducer, userDetailsReducer,
  user_isLoggedReducer, userUpdateProfileReducer, setReducer
} from './reducers/user/userReducers'
import {
  createOrderReducer, orderListMyReducer
} from './reducers/orders/orderReducers'
import {
  emailErrorReducer, invalidUserNamePasswordErrorReducer,
  passwordErrorReducer, usernameErrorReducer
} from './reducers/Forms/FormReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  shouldShowLoginForm: showLoginFormReducer,
  shouldShowSignupForm: showSignupFormReducer,
  userName: setUserNameReducer,
  userLogin: userLoginReducer,
  userLogged: user_isLoggedReducer,
  email: setReducer,
  password: setPasswordReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  currentProduct: currentProductDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  passwordError: passwordErrorReducer,
  emailError: emailErrorReducer,
  usernameError: usernameErrorReducer,
  invalidUserNamePassword: invalidUserNamePasswordErrorReducer,
  orderCreate: createOrderReducer,
  orderListMy: orderListMyReducer
})

const cartItemsFromStorage = [{}]
const orderItemsFromStorage = [{}]
const currentProductFromStorage = [{}]
const userInfoFromStorage = [{}]
const loginInfoFromStorage = ''

if (typeof window !== 'undefined') {
  // Perform localStorage action
  cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
}

if (typeof window !== 'undefined') {
  // Perform localStorage action
  orderItemsFromStorage = localStorage.getItem('orderItems')
    ? JSON.parse(localStorage.getItem('orderItems'))
    : []
}

if (typeof window !== 'undefined') {
  // Perform localStorage action
  currentProductFromStorage = localStorage.getItem('currentProductView')
    ? JSON.parse(localStorage.getItem('currentProductView'))
    : []
}

if (typeof window !== 'undefined') {
  // Perform localStorage action
  loginInfoFromStorage = localStorage.getItem('isUserLogged')
    ? JSON.parse(localStorage.getItem('isUserLogged'))
    : false
}

if (typeof window !== 'undefined') {
  // Perform localStorage action
  userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : []
}

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  shouldShowLoginForm: false,
  shouldShowSignupForm: false,
  userLogin: { userInfo: userInfoFromStorage },
  userLogged: loginInfoFromStorage,
  currentProduct: currentProductFromStorage,
  orderCreate: orderItemsFromStorage,
  userUpdateProfile: {
    loading: false,
    success: false,
    userInfo: {},
    error:{}
  },
  passwordError: false,
  emailError: false,
  usernameError: false,
  invalidUserNamePassword: false
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;