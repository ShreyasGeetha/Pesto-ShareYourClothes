import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access  public
const getProducts = asyncHandler( async (req, res) => {
  //All mongoose methods return a promise - either use then or await
  const products = await Product.find({}); //{} will get all the objects
  
  res.json(products)
})

// @desc Fetch single product
// @route GET /api/products/:id
// @access  public
const getProductById = asyncHandler( async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {    
    res.json(product)    
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
})

// @desc Delete product
// @route DELETE /api/products/:id
// @access  private/admin
const deleteProductById = asyncHandler( async (req, res) => {
  console.log('Delete product Backend - checking req body', req.body)
  const product = await Product.findById(req.body.productId)
  console.log('Able to locate the product to be delete?', product)
  if (product) {
    await product.remove()
     const products = await Product.find()
    res.json({
      products,
      message: 'Product Removed'
    })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }

})

export {
  getProducts,
  getProductById,
  deleteProductById
}