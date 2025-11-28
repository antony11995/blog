// Manejador de rutas no encontradas (404)
export const notFoundHandler = (req, res) => {
  res.status(404).json({ 
    error: 'No encontrado',
    mensaje: `No se puede ${req.method} ${req.originalUrl}` 
  });
};

// Manejador de errores global
export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.stack);
  
  const statusCode = err.statusCode || 500;
  const mensaje = err.message || 'Error interno del servidor';
  
  res.status(statusCode).json({
    error: mensaje,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
