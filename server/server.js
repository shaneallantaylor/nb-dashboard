const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const staticCss = path.join(__dirname, '../client/');
const staticBundle = path.join(__dirname, '../build/')

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", ['X-PINGOTHER', 'Content-Type']);
  res.setHeader("Access-Control-Allow-Methods", 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3500'); // WILD CARD WILL NOT WORK WHEN POSTING 
  next();
});

// Static Files
app.use('/static', express.static(staticCss));
app.use('/build', express.static(staticBundle));

// GET Endpoints

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'));
});

// Server Port

app.listen(port, () => console.log(`Listening on Port: ${port}`));
