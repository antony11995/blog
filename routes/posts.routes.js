import express from 'express';
import {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost
} from '../controllers/posts.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import {
  createPostSchema,
  updatePostSchema,
  postIdSchema,
  postsByAutorSchema
} from '../validations/posts.validation.js';

const router = express.Router();

// Obtener todos los posts
router.get('/', getAllPosts);

// Obtener posts por autor (debe ir antes de /:id para evitar conflictos)
router.get('/autor/:autorId', validate(postsByAutorSchema), getPostsByAuthor);

// Obtener un post por ID
router.get('/:id', validate(postIdSchema), getPostById);

// Crear un nuevo post
router.post('/', validate(createPostSchema), createPost);

// Actualizar un post
router.put('/:id', validate(updatePostSchema), updatePost);

// Eliminar un post
router.delete('/:id', validate(postIdSchema), deletePost);

export default router;