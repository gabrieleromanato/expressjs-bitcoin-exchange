'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');

app.disable('x-powered-by');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use('/', routes);

app.listen(port);

