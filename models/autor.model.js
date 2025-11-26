import pool from '../config/db.js';

class Autor {
  // Get all authors
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM autores');
    return rows;
  }

  // Get author by ID
  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM autores WHERE id = ?', [id]);
    return rows[0];
  }

  // Create new author
  static async create(autor) {
    const { nombre, email, imagen } = autor;
    const [result] = await pool.query(
      'INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)',
      [nombre, email, imagen]
    );
    return result.insertId;
  }

  // Update author
  static async update(id, autor) {
    const { nombre, email, imagen } = autor;
    const [result] = await pool.query(
      'UPDATE autores SET nombre = ?, email = ?, imagen = ? WHERE id = ?',
      [nombre, email, imagen, id]
    );
    return result.affectedRows;
  }

  // Delete author
  static async delete(id) {
    const [result] = await pool.query('DELETE FROM autores WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

export default Autor;
