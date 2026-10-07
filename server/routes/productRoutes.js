import express from 'express';
import {
  getProducts,
  getProductById,
  getTrendingProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/trending', getTrendingProducts);
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
