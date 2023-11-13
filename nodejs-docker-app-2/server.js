'use strict';
const request = require("request");
const express = require('express');

// Constants
const PORT = process.env.PORT || 8082;

// App
const app = express();

app.get('/service-2', (req, res) => {
  return res.send("It's service 2");
});

app.get('/service-2/hello', (req, res) => {
  return res.send("It's hello from service 2");
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
