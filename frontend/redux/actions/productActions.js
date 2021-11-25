import axios from 'axios';
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_REQUEST } from '../types/productTypes';

//action creators
export const listProducts = () => async (dispatch) =>{
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    
    const { data } = await axios.get('/api/products')

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}


export const listProductDetails = (id) => async (dispatch, getState) =>{
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    console.log('222')
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data
    })
    
  localStorage.setItem('currentProductView', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }  
}

export const deleteProductFromDB = (productId) => async (dispatch, getState) =>{
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST
    })
    
     console.log('do we get the id here1',productId )
    const { userLogin: { userInfo } } = getState()
    const userId = userInfo._id
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      },
      data: {
        productId,
        userId
      }
    }
    const {data} = await axios.delete(
      `/api/products/${productId}`, 
      config)
    
     dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data
     })
    console.log('what did we get after deleting a product',data)
    
    dispatch({ type: PRODUCT_LIST_REQUEST })
    
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })

  //localStorage.setItem('allUsersInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}