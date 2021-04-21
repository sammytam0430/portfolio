const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const port = 5000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', serveStatic(path.join('client/dist')));

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
