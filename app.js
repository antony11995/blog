import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes.js';
import { notFoundHandler, errorHandler } from './middlewares/errorHandler.middleware.js';

// Inicializar aplicación Express
const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint de verificación de estado
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', mensaje: 'Servidor funcionando correctamente' });
});

// Rutas de la API
app.use('/api', apiRoutes);

// Manejadores de errores (deben ir al final)
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
