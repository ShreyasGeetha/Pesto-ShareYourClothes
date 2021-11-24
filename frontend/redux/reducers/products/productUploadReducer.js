import {
  DISABLE_ERROR_PRODUCT_BRAND,
  DISABLE_ERROR_PRODUCT_CATEGORY,
  DISABLE_ERROR_PRODUCT_COLOR,
  DISABLE_ERROR_PRODUCT_DESCRIPTION,
  DISABLE_ERROR_PRODUCT_DROPLOCATION,
  DISABLE_ERROR_PRODUCT_IMAGE,
  DISABLE_ERROR_PRODUCT_IMAGE_ALT,
  DISABLE_ERROR_PRODUCT_NAME,
  DISABLE_ERROR_PRODUCT_PICKUP_TIME,
  DISABLE_ERROR_PRODUCT_SIZE,
  ERROR_PRODUCT_BRAND,
  ERROR_PRODUCT_CATEGORY,
  ERROR_PRODUCT_COLOR,
  ERROR_PRODUCT_DESCRIPTION,
  ERROR_PRODUCT_DROPLOCATION,
  ERROR_PRODUCT_IMAGE,
  ERROR_PRODUCT_IMAGE_ALT,
  ERROR_PRODUCT_NAME,
  ERROR_PRODUCT_PICKUP_TIME,
  ERROR_PRODUCT_SIZE,
  SET_PRODUCT_BRAND, SET_PRODUCT_CATEGORY,
  SET_PRODUCT_COLOR, SET_PRODUCT_DESCRIPTION,
  SET_PRODUCT_DROPLOCATION, SET_PRODUCT_IMAGE,
  SET_PRODUCT_IMAGE_ALT, SET_PRODUCT_NAME,
  SET_PRODUCT_PICKUP_TIME, SET_PRODUCT_SIZE
} from "../../types/productUploadTypes"

export const setProductNameReducer = (state = {productName:''}, action) => {
  switch (action.type) {
    case SET_PRODUCT_NAME:
      return action.payload    
    default:
      return state
  }
}

export const setProductBrandReducer = (state = {productBrand:''}, action) => {
  switch (action.type) {
    case SET_PRODUCT_BRAND:
      return action.payload    
    default:
      return state
  }
}

export const setProductCategoryReducer = (state = {productCategory:''}, action) => {
  switch (action.type) {
    case SET_PRODUCT_CATEGORY:
      return action.payload    
    default:
      return state
  }
}

export const setProductColorReducer = (state = {productColor:''}, action) => {
  switch (action.type) {
    case SET_PRODUCT_COLOR:
      return action.payload    
    default:
      return state
  }
}

export const setProductDescriptionReducer = (state = {productDescription:''}, action) => {
  switch (action.type) {
    case SET_PRODUCT_DESCRIPTION:
      return action.payload    
    default:
      return state
  }
}

export const setProductDropLocationReducer = (state = {productDropLocation:''}, action) => {
  switch (action.type) {
    case SET_PRODUCT_DROPLOCATION:
      return action.payload    
    default:
      return state
  }
}

export const setProductImageReducer = (state = {productImage:''}, action) => {
  switch (action.type) {
    case SET_PRODUCT_IMAGE:
      return action.payload    
    default:
      return state
  }
}

export const setProductImageAltReducer = (state = {productImageAlt:''}, action) => {
  switch (action.type) {
    case SET_PRODUCT_IMAGE_ALT:
      return action.payload    
    default:
      return state
  }
}

export const setProductPickupTimeReducer = (state = {productPickupTime:''}, action) => {
  switch (action.type) {
    case SET_PRODUCT_PICKUP_TIME:
      return action.payload    
    default:
      return state
  }
}

export const setProductSizeReducer = (state = {productSize:''}, action) => {
  switch (action.type) {
    case SET_PRODUCT_SIZE:
      return action.payload    
    default:
      return state
  }
}

export const productNameErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_NAME:
      return action.payload
    case DISABLE_ERROR_PRODUCT_NAME:
      return false
    default:
      return state
  }
}

export const productBrandErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_BRAND:
      return action.payload
    case DISABLE_ERROR_PRODUCT_BRAND:
      return false
    default:
      return state
  }
}

export const productCategoryErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_CATEGORY:
      return action.payload
    case DISABLE_ERROR_PRODUCT_CATEGORY:
      return false
    default:
      return state
  }
}

export const productColorErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_COLOR:
      return action.payload
    case DISABLE_ERROR_PRODUCT_COLOR:
      return false
    default:
      return state
  }
}

export const productDescriptionErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_DESCRIPTION:
      return action.payload
    case DISABLE_ERROR_PRODUCT_DESCRIPTION:
      return false
    default:
      return state
  }
}

export const productDropLocationErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_DROPLOCATION:
      return action.payload
    case DISABLE_ERROR_PRODUCT_DROPLOCATION:
      return false
    default:
      return state
  }
}

export const productImageErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_IMAGE:
      return action.payload
    case DISABLE_ERROR_PRODUCT_IMAGE:
      return false
    default:
      return state
  }
}

export const productImageAltErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_IMAGE_ALT:
      return action.payload
    case DISABLE_ERROR_PRODUCT_IMAGE_ALT:
      return false
    default:
      return state
  }
}

export const productPickupTimeErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_PICKUP_TIME:
      return action.payload
    case DISABLE_ERROR_PRODUCT_PICKUP_TIME:
      return false
    default:
      return state
  }
}

export const productSizeErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_SIZE:
      return action.payload
    case DISABLE_ERROR_PRODUCT_SIZE:
      return false
    default:
      return state
  }
}


