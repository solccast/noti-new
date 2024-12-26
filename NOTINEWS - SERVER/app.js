const express = require('express');
const path = require('path');
const logger = require('morgan');
const router = require('./routes/index');

/**
 * @description
 * This is the main entry point of the application
 * Se encarga de configurar la aplicación; incluye la configuración de las rutas, middlewares, etc.
 */
const app = express();

// Configuración de la vista
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para logs
app.use(logger('dev'));

// Configuración de la aplicación
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/', router);

module.exports = app;
