'use strict';

const express = require('express');

// Constants
const PORT = 8888;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Success! The Framework Training template microservice is up and running using Node.js\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
