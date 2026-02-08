const express = require('express');
const askJijiRoute = require('./routes/askJiji.route');

const app = express();
app.use(express.json());

app.use('/', askJijiRoute);

module.exports = app;
