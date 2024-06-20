// Importamos el módulo 'express'
const express = require('express');
const path = require('path'); // Módulo para manejar rutas de archivos

// Creamos una aplicación de express
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Definimos la ruta principal ('/') para renderizar un archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Definimos la ruta '/ubicacion'
app.get('/ubicacion', (req, res) => {
  res.send('Ubicacion');
});

// Definimos la ruta '/aboutus'
app.get('/aboutus', (req, res) => {
  res.send('Sobre Nosotros');
});

// Definimos el puerto en el que escuchará el servidor
const PORT = 3000;

// Hacemos que la aplicación de express escuche en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
