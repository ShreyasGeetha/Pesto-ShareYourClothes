import {
  SET_PRODUCT_NAME, SET_PRODUCT_BRAND,
  SET_PRODUCT_CATEGORY, SET_PRODUCT_COLOR,
  SET_PRODUCT_DESCRIPTION, SET_PRODUCT_DROPLOCATION,
  SET_PRODUCT_IMAGE, SET_PRODUCT_IMAGE_ALT, 
  SET_PRODUCT_PICKUP_TIME, SET_PRODUCT_SIZE, ERROR_PRODUCT_NAME, 
} from "../types/productUploadTypes"

/**
 * Set Product Name
 */
export const setProductName = (productName) => (dispatch) => {
  console.log('productName',productName)
  try {
    dispatch({
      type: SET_PRODUCT_NAME,
      payload: productName
    })    
  } catch (error) {
    
  }
}

/**
 * Set Product Brand
 */
export const setProductBrand = (productBrand) => (dispatch) => {
  console.log('productBrand',productBrand)
  try {
    dispatch({
      type: SET_PRODUCT_BRAND,
      payload: productBrand
    })    
  } catch (error) {
    
  }
}

/**
 * Set Product Category
 */
export const setProductCategory = (productCategory) => (dispatch) => {
  console.log('productCategory',productCategory)
  try {
    dispatch({
      type: SET_PRODUCT_CATEGORY,
      payload: productCategory
    })    
  } catch (error) {
    
  }
}

/**
 * Set Product Color
 */
export const setProductColor = (productColor) => (dispatch) => {
  console.log('productColor',productColor)
  try {
    dispatch({
      type: SET_PRODUCT_COLOR,
      payload: productColor
    })    
  } catch (error) {
    
  }
}

/**
 * Set Product Description
 */
export const setProductDescription = (productDescription) => (dispatch) => {
  console.log('productDescription',productDescription)
  try {
    dispatch({
      type: SET_PRODUCT_DESCRIPTION,
      payload: productDescription
    })    
  } catch (error) {
    
  }
}

/**
 * Set Product DropLocation
 */
export const setProductDropLocation = (productDropLocation) => (dispatch) => {
  console.log('productDropLocation',productDropLocation)
  try {
    dispatch({
      type: SET_PRODUCT_DROPLOCATION,
      payload: productDropLocation
    })    
  } catch (error) {
    
  }
}

/**
 * Set Product Image
 */
export const setProductImage = (productImage) => (dispatch) => {
  console.log('productImage',productImage)
  try {
    dispatch({
      type: SET_PRODUCT_IMAGE,
      payload: productImage
    })    
  } catch (error) {
    
  }
}

/**
 * Set Product ImageAlt
 */
export const setProductImageAlt = (productImageAlt) => (dispatch) => {
  console.log('productImageAlt',productImageAlt)
  try {
    dispatch({
      type: SET_PRODUCT_IMAGE_ALT,
      payload: productImageAlt
    })    


  } catch (error) {


    
  }
}

/**
 * Set Product PickupTime
 */
export const setProductPickupTime = (productPickupTime) => (dispatch) => {
  console.log('productPickupTime',productPickupTime)
  try {
    dispatch({
      type: SET_PRODUCT_PICKUP_TIME,
      payload: productPickupTime
    })    
  } catch (error) {
    
  }
}

/**
 * Set Product Size
 */
export const setProductSize = (productSize) => (dispatch) => {
  console.log('productSize',productSize)
  try {
    dispatch({
      type: SET_PRODUCT_SIZE,
      payload: productSize
    })    
  } catch (error) {
    
  }
}

/**
 * error Product Name
 */
export const errorProductName = () => (dispatch) => {
  
  try {
    dispatch({
      type: ERROR_PRODUCT_NAME,
      payload: true
    })    
  } catch (error) {
    
  }
}

/**
 * error Product Brand
 */
export const errorProductBrand = () => (dispatch) => {
  
  try {
    dispatch({
      type: ERROR_PRODUCT_BRAND,
      payload: true
    })    
  } catch (error) {
    
  }
}

/**
 * error Product Category
 */
export const errorProductCategory = () => (dispatch) => {
  
  try {
    dispatch({
      type: ERROR_PRODUCT_CATEGORY,
      payload: true
    })    
  } catch (error) {
    
  }
}

/**
 * error Product Color
 */
export const errorProductColor = () => (dispatch) => {
  
  try {
    dispatch({
      type: ERROR_PRODUCT_COLOR,
      payload: true
    })    
  } catch (error) {
    
  }
}

/**
 * error Product Description
 */
export const errorProductDescription = () => (dispatch) => {
  
  try {
    dispatch({
      type: ERROR_PRODUCT_DESCRIPTION,
      payload: true
    })    
  } catch (error) {
    
  }
}

/**
 * error Product DropLocation
 */
export const errorProductDropLocation = () => (dispatch) => {
  
  try {
    dispatch({
      type: ERROR_PRODUCT_DROPLOCATION,
      payload: true
    })    
  } catch (error) {
    
  }
}

/**
 * error Product Image
 */
export const errorProductImage = () => (dispatch) => {
  
  try {
    dispatch({
      type: ERROR_PRODUCT_IMAGE,
      payload: true
    })    
  } catch (error) {
    
  }
}

/**
 * error Product ImageAlt
 */
export const errorProductImageAlt = () => (dispatch) => {
  
  try {
    dispatch({
      type: ERROR_PRODUCT_IMAGE_ALT,
      payload: true
    })    


  } catch (error) {


    
  }
}

/**
 * error Product PickupTime
 */
export const errorProductPickupTime = () => (dispatch) => {
  
  try {
    dispatch({
      type: ERROR_PRODUCT_PICKUP_TIME,
      payload: true
    })    
  } catch (error) {
    
  }
}

/**
 * error Product Size
 */
export const errorProductSize = () => (dispatch) => {
  
  try {
    dispatch({
      type: ERROR_PRODUCT_SIZE,
      payload: true
    })    
  } catch (error) {
    
  }
}

