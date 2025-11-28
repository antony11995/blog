import pool from '../config/db.js';

class Post {
  // Obtener todos los posts
  static async getAll() {
    const [rows] = await pool.query(`
      SELECT p.*, a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen 
      FROM posts p 
      LEFT JOIN autores a ON p.autor_id = a.id
    `);
    return rows;
  }

  // Obtener post por ID
  static async getById(id) {
    const [rows] = await pool.query(`
      SELECT p.*, a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen 
      FROM posts p 
      LEFT JOIN autores a ON p.autor_id = a.id 
      WHERE p.id = ?
    `, [id]);
    return rows[0];
  }

  // Obtener posts por autor
  static async getByAuthor(autorId) {
    const [rows] = await pool.query('SELECT * FROM posts WHERE autor_id = ?', [autorId]);
    return rows;
  }

  // Crear nuevo post
  static async create(post) {
    const { titulo, descripcion, categoria, autor_id } = post;
    const [result] = await pool.query(
      'INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)',
      [titulo, descripcion, categoria, autor_id]
    );
    return result.insertId;
  }

  // Actualizar post
  static async update(id, post) {
    const { titulo, descripcion, categoria, autor_id } = post;
    const [result] = await pool.query(
      'UPDATE posts SET titulo = ?, descripcion = ?, categoria = ?, autor_id = ? WHERE id = ?',
      [titulo, descripcion, categoria, autor_id, id]
    );
    return result.affectedRows;
  }

  // Eliminar post
  static async delete(id) {
    const [result] = await pool.query('DELETE FROM posts WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

export default Post;
