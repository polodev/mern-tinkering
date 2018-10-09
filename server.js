const express = require('express')
const os = require('os')
const hostname = os.hostname()
console.log('hostname', hostname)

const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => res.send('hello world'))

const server = app.listen(port, () => console.log(`server runnon on port - http://localhost:${server.address().port} `))