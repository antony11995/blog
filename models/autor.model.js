import pool from '../config/db.js';

class Autor {
  // Obtener todos los autores
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM autores');
    return rows;
  }

  // Obtener autor por ID
  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM autores WHERE id = ?', [id]);
    return rows[0];
  }

  // Crear nuevo autor
  static async create(autor) {
    const { nombre, email, imagen } = autor;
    const [result] = await pool.query(
      'INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)',
      [nombre, email, imagen]
    );
    return result.insertId;
  }

  // Actualizar autor
  static async update(id, autor) {
    const { nombre, email, imagen } = autor;
    const [result] = await pool.query(
      'UPDATE autores SET nombre = ?, email = ?, imagen = ? WHERE id = ?',
      [nombre, email, imagen, id]
    );
    return result.affectedRows;
  }

  // Eliminar autor
  static async delete(id) {
    const [result] = await pool.query('DELETE FROM autores WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

export default Autor;
