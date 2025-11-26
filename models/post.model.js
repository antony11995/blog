import pool from '../config/db.js';

class Post {
  // Get all posts
  static async getAll() {
    const [rows] = await pool.query(`
      SELECT p.*, a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen 
      FROM posts p 
      LEFT JOIN autores a ON p.autor_id = a.id
    `);
    return rows;
  }

  // Get post by ID
  static async getById(id) {
    const [rows] = await pool.query(`
      SELECT p.*, a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen 
      FROM posts p 
      LEFT JOIN autores a ON p.autor_id = a.id 
      WHERE p.id = ?
    `, [id]);
    return rows[0];
  }

  // Get posts by author
  static async getByAuthor(autorId) {
    const [rows] = await pool.query('SELECT * FROM posts WHERE autor_id = ?', [autorId]);
    return rows;
  }

  // Create new post
  static async create(post) {
    const { titulo, descripcion, categoria, autor_id } = post;
    const [result] = await pool.query(
      'INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)',
      [titulo, descripcion, categoria, autor_id]
    );
    return result.insertId;
  }

  // Update post
  static async update(id, post) {
    const { titulo, descripcion, categoria, autor_id } = post;
    const [result] = await pool.query(
      'UPDATE posts SET titulo = ?, descripcion = ?, categoria = ?, autor_id = ? WHERE id = ?',
      [titulo, descripcion, categoria, autor_id, id]
    );
    return result.affectedRows;
  }

  // Delete post
  static async delete(id) {
    const [result] = await pool.query('DELETE FROM posts WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

export default Post;
