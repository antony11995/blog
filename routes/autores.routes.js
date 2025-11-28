import express from 'express';
import {
  getAllAutores,
  getAutorById,
  createAutor,
  updateAutor,
  deleteAutor
} from '../controllers/autores.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import {
  createAutorSchema,
  updateAutorSchema,
  autorIdSchema
} from '../validations/autores.validation.js';

const router = express.Router();

// Obtener todos los autores
router.get('/', getAllAutores);

// Obtener un autor por ID
router.get('/:id', validate(autorIdSchema), getAutorById);

// Crear un nuevo autor
router.post('/', validate(createAutorSchema), createAutor);

// Actualizar un autor
router.put('/:id', validate(updateAutorSchema), updateAutor);

// Eliminar un autor
router.delete('/:id', validate(autorIdSchema), deleteAutor);

export default router;