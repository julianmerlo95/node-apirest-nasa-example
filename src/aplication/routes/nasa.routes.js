const express = require('express');
const showUrl = require('../controller/nasa.controller');

const routes = express.Router();

// Middleware
routes.use(express.json());

// Routes
routes.get('/', showUrl);


module.exports = routes;
