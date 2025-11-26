import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/api.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log("Servidor escuchando en puerto " + PORT);
});

app.use(cors());
app.use("/api", apiRoutes);