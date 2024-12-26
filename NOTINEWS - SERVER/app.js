const express = require('express');
const path = require('path');
const logger = require('morgan');

/**
 * @description
 * This is the main entry point of the application
 * Se encarga de configurar la aplicación; incluye la configuración de las rutas, middlewares, etc.
 */
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para logs
app.use(logger('dev'));

// Configuración de la aplicación
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', (req, res) => {
	res.send('Hello World!');
});

module.exports = app;
