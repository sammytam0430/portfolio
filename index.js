const express = require('express');
const serveStatic = require('serve-static');
const cors = require('cors');
const path = require('path');
const port = 5000;
const app = express();
const api = require('./routes/api');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(require('connect-history-api-fallback')());

app.use('/', serveStatic(path.join(__dirname + '/client/dist')));
app.use('/api', api);

app.listen(process.env.PORT || port, () => {
  console.log(`Listening at port ${process.env.PORT || port}`);
});
