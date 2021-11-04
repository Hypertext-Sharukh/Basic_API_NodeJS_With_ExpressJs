
const express = require('express');
const app = express();
const handeler = require('./apihandler.js')
app.use('/api',handeler);

app.listen('8080');