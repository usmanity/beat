const express = require('express');
const { Heart } = require('./Heart.js');
const app = express();

app.use(express.static("public"));

app.get('/heartbeat', Heart.beat);

app.listen(1234);
