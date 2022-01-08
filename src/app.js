const express = require('express');
const config = require('../config/config');

const app = express();
const routes = require('./aplication/routes/index');
const cors = require('cors');
// Middleware
app.use(express.json());

app.use(cors(
  config.application.cors.server,
));

// Routes
app.use('/', routes);


app.listen(process.env.PORT, () => {
  console.log(`The port functional in ${process.env.PORT}`);
});
