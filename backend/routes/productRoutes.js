import express from 'express'
import { getProducts, getProductById, deleteProductById } from '../controllers/productControllers.js'
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access  public
router.route('/').get(getProducts)


// @desc Fetch single product
// @route GET /api/products/:id
// @access  public
router.route('/:id').get(getProductById)

router.route('/:id').delete(protect, deleteProductById)
export default router;