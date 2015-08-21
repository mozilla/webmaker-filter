const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('webmaker-filter');
});

module.exports = app;
