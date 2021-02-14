const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postRouter = require('./routes/post-routes');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use(postRouter);

app.listen(8080);