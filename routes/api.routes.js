import express from 'express';
import autoresRoutes from './autores.routes.js';
import postsRoutes from './posts.routes.js';

const router = express.Router();

// Rutas de autores
router.use("/autores", autoresRoutes);

// Rutas de posts
router.use("/posts", postsRoutes);

export default router;