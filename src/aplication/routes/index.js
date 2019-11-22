const express = require('express');

const routes = express.Router();

routes.use('/nasa', require('./nasa.routes'));
routes.use('/', require('./default.routes'));

module.exports = routes;
