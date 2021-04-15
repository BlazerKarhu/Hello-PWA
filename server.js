'use strict';
const express = require('express');
const app = express();
app.use(express.static('public')); //__dir and not _dir
const port = 8000; // you can use any port
app.listen(port);
console.log('server on localhost:' + port);
