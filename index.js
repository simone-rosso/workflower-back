const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar routers de los servicios
const authRoutes = require('.src/services/v1/auth/index');
const notificationRoutes = require('./services/v1/notification/index');
const scheduleRoutes = require('./services/v1/schedule/index');
const userRoutes = require('./services/v1/users/index');

// Definir rutas base para cada servicio
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1/schedules', scheduleRoutes);
app.use('/api/v1/users', userRoutes);

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});