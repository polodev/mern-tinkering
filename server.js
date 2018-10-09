const express = require('express')
const os = require('os')
const hostname = os.hostname()
const db = require('./config/keys').mongoURI
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

mongoose.connect(db,  { useNewUrlParser: true })
  .then(() => console.log('success'))
  .catch((error) => console.log('failed to connect' + error))

const app = express();
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = process.env.port || 3000;

app.get('/', (req, res) => res.send('hello world'))

const server = app.listen(port, () => console.log(`server runnon on port - http://localhost:${server.address().port} `))