import express from 'express';
import {
  getAllAutores,
  getAutorById,
  createAutor,
  updateAutor,
  deleteAutor
} from '../controllers/autores.controller.js';

const router = express.Router();

// GET all authors
router.get('/', getAllAutores);

// GET single author by ID
router.get('/:id', getAutorById);

// POST create new author
router.post('/', createAutor);

// PUT update author
router.put('/:id', updateAutor);

// DELETE author
router.delete('/:id', deleteAutor);

export default router;