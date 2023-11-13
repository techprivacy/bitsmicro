const express = require('express');
const request = require('request');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const App2Url = process.env.APP_2_URL;
const App3Url = process.env.APP_3_URL;

// App
const app = express();

app.get('/', (req, res) => {
  return res.send("It's service 1");
});

app.get('/service-1', (req, res) => {
  return res.send("It's service 1");
});

app.get('/service-1/hello', (req, res) => {
  return res.send("It's hello from service 1");
});

app.get('/call-service-2', (req, res) => {
  var options = {
    method: 'GET',
    url: `${App2Url}`,
    headers: {
      'cache-control': 'no-cache'
    }
  };

  request(options, function (error, response, body) {
    if (error) {
      return res.send(error.message);
    }

    return res.send(body);
  });
});

app.get('/call-service-3', (req, res) => {
  var options = {
    method: 'GET',
    url: `${App3Url}`,
    headers: {
      'cache-control': 'no-cache'
    }
  };

  request(options, function (error, response, body) {
    if (error) {
      return res.send(error.message);
    }

    return res.send(body);
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
