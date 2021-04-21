const express = require('express');
const serveStatic = require('serve-static');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//app.use(require('connect-history-api-fallback')());

app.use('/', serveStatic(path.join(__dirname + '/client/dist')));

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
