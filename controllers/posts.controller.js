import Post from '../models/post.model.js';

// Obtener todos los posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener post por ID
export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.getById(id);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener posts por autor
export const getPostsByAuthor = async (req, res) => {
  try {
    const { autorId } = req.params;
    const posts = await Post.getByAuthor(autorId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear nuevo post
export const createPost = async (req, res) => {
  try {
    const postId = await Post.create(req.body);
    res.status(201).json({ id: postId, mensaje: 'Post creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar post
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await Post.update(id, req.body);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.json({ mensaje: 'Post actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar post
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await Post.delete(id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.json({ mensaje: 'Post eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
