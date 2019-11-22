const express = require('express');
const defaultPag = require('../controller/default.controller');

const routes = express.Router();

// Middleware
routes.use(express.json());

// Routes
routes.get('/', defaultPag);


module.exports = routes;
