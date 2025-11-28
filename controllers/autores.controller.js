import Autor from '../models/autor.model.js';

// Obtener todos los autores
export const getAllAutores = async (req, res) => {
  try {
    const autores = await Autor.getAll();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener autor por ID
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

// Crear nuevo autor
export const createAutor = async (req, res) => {
  try {
    const autorId = await Autor.create(req.body);
    res.status(201).json({ id: autorId, mensaje: 'Autor creado exitosamente' });
  } catch (error) {
    // Control de email duplicado
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ 
        error: 'El email ya está registrado',
        mensaje: 'Ya existe un autor con ese correo electrónico'
      });
    }
    res.status(500).json({ error: error.message });
  }
};

// Actualizar autor
export const updateAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await Autor.update(id, req.body);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Autor no encontrado' });
    }
    res.json({ mensaje: 'Autor actualizado exitosamente' });
  } catch (error) {
    // Control de email duplicado
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ 
        error: 'El email ya está registrado',
        mensaje: 'Ya existe otro autor con ese correo electrónico'
      });
    }
    res.status(500).json({ error: error.message });
  }
};

// Eliminar autor
export const deleteAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await Autor.delete(id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Autor no encontrado' });
    }
    res.json({ mensaje: 'Autor eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
