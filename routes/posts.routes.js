import express from 'express';
import {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost
} from '../controllers/posts.controller.js';

const router = express.Router();

// GET all posts
router.get('/', getAllPosts);

// GET single post by ID
router.get('/:id', getPostById);

// GET posts by author
router.get('/autor/:autorId', getPostsByAuthor);

// POST create new post
router.post('/', createPost);

// PUT update post
router.put('/:id', updatePost);

// DELETE post
router.delete('/:id', deletePost);

export default router;