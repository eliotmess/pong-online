const express = require('express');

const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const io = (module.exports.io = require('socket.io').listen(http));
const SocketManager = require('./src/server/SocketsManager');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/build`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

http.listen(port);

io.on('connection', SocketManager);
