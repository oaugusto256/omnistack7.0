const express = require('express');

const routes = new express.Router();

// "(req, res) => {}" it is a middleware
routes.get('/', (req, res) => {
  return res.send(`Olá ${req.query.name}!`);
});

module.exports = routes;
