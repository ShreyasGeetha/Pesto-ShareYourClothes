import {
  SET_PRODUCT_NAME, SET_PRODUCT_BRAND,
  SET_PRODUCT_CATEGORY, SET_PRODUCT_COLOR,
  SET_PRODUCT_DESCRIPTION, SET_PRODUCT_DROPLOCATION,
  SET_PRODUCT_IMAGE, SET_PRODUCT_IMAGE_ALT, 
  SET_PRODUCT_PICKUP_TIME, SET_PRODUCT_SIZE, ERROR_PRODUCT_NAME,
  DISABLE_ERROR_PRODUCT_NAME, DISABLE_ERROR_PRODUCT_BRAND,
  DISABLE_ERROR_PRODUCT_CATEGORY, DISABLE_ERROR_PRODUCT_COLOR,
  DISABLE_ERROR_PRODUCT_DESCRIPTION, DISABLE_ERROR_PRODUCT_DROPLOCATION,
  DISABLE_ERROR_PRODUCT_IMAGE, DISABLE_ERROR_PRODUCT_IMAGE_ALT,
  DISABLE_ERROR_PRODUCT_PICKUP_TIME, DISABLE_ERROR_PRODUCT_SIZE, ERROR_PRODUCT_BRAND, ERROR_PRODUCT_CATEGORY, ERROR_PRODUCT_COLOR, ERROR_PRODUCT_DESCRIPTION, ERROR_PRODUCT_DROPLOCATION, ERROR_PRODUCT_IMAGE, ERROR_PRODUCT_IMAGE_ALT, ERROR_PRODUCT_PICKUP_TIME, ERROR_PRODUCT_SIZE,
} from "../types/productUploadTypes"

/**
 * Set Product Name
 */
export const setProductName = (productName) => (dispatch) => {
  try {
    dispatch({
      type: SET_PRODUCT_NAME,
      payload: productName
    })
    dispatch({
      type: DISABLE_ERROR_PRODUCT_NAME,
      payload: false
    })
  } catch (error) {
    
  }
}

/**
 * Set Product Brand
 */
export const setProductBrand = (productBrand) => (dispatch) => {
  
  try {
    dispatch({
      type: SET_PRODUCT_BRAND,
      payload: productBrand
    })
     dispatch({
      type: DISABLE_ERROR_PRODUCT_BRAND,
      payload: false
    }) 
  } catch (error) {
    
  }
}

/**
 * Set Product Category
 */
export const setProductCategory = (productCategory) => (dispatch) => {
  
  try {
    dispatch({
      type: SET_PRODUCT_CATEGORY,
      payload: productCategory
    })
    dispatch({
      type: DISABLE_ERROR_PRODUCT_CATEGORY,
      payload: false
    }) 
  } catch (error) {
    
  }
}

/**
 * Set Product Color
 */
export const setProductColor = (productColor) => (dispatch) => {
  
  try {
    dispatch({
      type: SET_PRODUCT_COLOR,
      payload: productColor
    })
    dispatch({
      type: DISABLE_ERROR_PRODUCT_COLOR,
      payload: false
    })
  } catch (error) {
    
  }
}

/**
 * Set Product Description
 */
export const setProductDescription = (productDescription) => (dispatch) => {
  
  try {
    dispatch({
      type: SET_PRODUCT_DESCRIPTION,
      payload: productDescription
    })
    dispatch({
      type: DISABLE_ERROR_PRODUCT_DESCRIPTION,
      payload: false
    })
  } catch (error) {
    
  }
}

/**
 * Set Product DropLocation
 */
export const setProductDropLocation = (productDropLocation) => (dispatch) => {
  
  try {
    dispatch({
      type: SET_PRODUCT_DROPLOCATION,
      payload: productDropLocation
    })
    dispatch({
      type: DISABLE_ERROR_PRODUCT_DROPLOCATION,
      payload: false
    }) 
  } catch (error) {
    
  }
}

/**
 * Set Product Image
 */
export const setProductImage = (productImage) => (dispatch) => {
  
  try {
    dispatch({
      type: SET_PRODUCT_IMAGE,
      payload: productImage
    })
    dispatch({
      type: DISABLE_ERROR_PRODUCT_IMAGE,
      payload: false
    })
  } catch (error) {
    
  }
}

/**
 * Set Product ImageAlt
 */
export const setProductImageAlt = (productImageAlt) => (dispatch) => {
  
  try {
    dispatch({
      type: SET_PRODUCT_IMAGE_ALT,
      payload: productImageAlt
    })    
    dispatch({
      type: DISABLE_ERROR_PRODUCT_IMAGE_ALT,
      payload: false
    }) 

  } catch (error) {


    
  }
}

/**
 * Set Product PickupTime
 */
export const setProductPickupTime = (productPickupTime) => (dispatch) => {
  
  try {
    dispatch({
      type: SET_PRODUCT_PICKUP_TIME,
      payload: productPickupTime
    })
    dispatch({
      type: DISABLE_ERROR_PRODUCT_PICKUP_TIME,
      payload: false
    }) 
  } catch (error) {
    
  }
} 

/**
 * Set Product Size
 */
export const setProductSize = (productSize) => (dispatch) => {
  
  try {
    dispatch({
      type: SET_PRODUCT_SIZE,
      payload: productSize
    })
    dispatch({
      type: DISABLE_ERROR_PRODUCT_SIZE,
      payload: false
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

