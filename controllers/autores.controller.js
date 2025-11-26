import Autor from '../models/autor.model.js';

// Get all authors
export const getAllAutores = async (req, res) => {
  try {
    const autores = await Autor.getAll();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get author by ID
export const getAutorById = async (req, res) => {
  try {
    const { id } = req.params;
    const autor = await Autor.getById(id);
    if (!autor) {
      return res.status(404).json({ error: 'Autor no encontrado' });
    }
    res.json(autor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new author
export const createAutor = async (req, res) => {
  try {
    const autorId = await Autor.create(req.body);
    res.status(201).json({ id: autorId, message: 'Autor creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update author
export const updateAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await Autor.update(id, req.body);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Autor no encontrado' });
    }
    res.json({ message: 'Autor actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete author
export const deleteAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await Autor.delete(id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Autor no encontrado' });
    }
    res.json({ message: 'Autor eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
