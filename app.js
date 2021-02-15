const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postRouter = require('./routes/post-routes');

const app = express();

app.use(bodyParser.json());

app.use(cors());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, access-control-allow-origin');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

app.use(postRouter);

app.listen(8080, () => console.log('Server started!'));