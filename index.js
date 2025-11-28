import dotenv from 'dotenv';
import app from './app.js';

// Cargar variables de entorno
dotenv.config();

// Obtener puerto del entorno o usar el predeterminado
const PORT = process.env.PORT || 3000;

// Iniciar servidor
const server = app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en el puerto ${PORT}`);
  console.log(`📍 Entorno: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 API disponible en: http://localhost:${PORT}/api`);
});

// Apagado controlado del servidor
process.on('SIGTERM', () => {
  console.log('Señal SIGTERM recibida: cerrando servidor HTTP');
  server.close(() => {
    console.log('Servidor HTTP cerrado');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\nSeñal SIGINT recibida: cerrando servidor HTTP');
  server.close(() => {
    console.log('Servidor HTTP cerrado');
    process.exit(0);
  });
});