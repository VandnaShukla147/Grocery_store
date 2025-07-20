import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct, searchProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/search', searchProducts);

export default router; 