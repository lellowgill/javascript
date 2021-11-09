const http = require('http');
const db = require('./db')

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);


app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.get('/friends', (req, res) => {
    res.send('This will be the friends list');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const friendArray = requir('./db');