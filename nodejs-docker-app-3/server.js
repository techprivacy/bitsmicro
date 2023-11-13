'use strict';

const express = require('express');
const request = require("request")
const app = express();
const PORT = process.env.PORT || 8083;

app.get('/service-3', (req, res) => {
  return res.send("It's service 3");
});

app.get('/service-3/hello', (req, res) => {
  return res.send("It's hello from service 3");
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
