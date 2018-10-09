#
to increase port max_user_watches in ubuntu

~~~bash
echo fs.inotify.max_user_watches = 582222 | sudo tee - a / etc / sysctl.conf && sudo sysctl - p~~~
~~~

#to rename git branch

~~~bash
git branch -m old-name new-name
~~~

# to connect with mongoose

~~~js
const db = 'mongodb://localhost:27017/dev_connector'
const mongoose = require('mongoose')
mongoose.connect(db,  { useNewUrlParser: true })
  .then(() => console.log('success'))
  .catch((error) => console.log('failed to connect' + error))
~~~

# getting host name 

~~~js
const os = require('os')
const hostname = os.hostname()
~~~

# getting server port name in express js

~~~js
const server = app.listen(port, () => console.log(`server runnon on port - http://localhost:${server.address().port} `))
~~~

# setting up express router in multiple files 

~~~js
// server.js 
const users = require('./routes/api/users')
const posts = require('./routes/api/posts')

const app = express();
app.use('/api/users', users)
app.use('/api/posts', posts)

// routes/api/users.js
const express = require('express')

const router = express.Router();

/**
 * @route  GET /api/users/test
 * @desc   testing users router
 * @access Public
 */
router.get('/test', (req, res) => res.json({"message": "OK"}))

// routes/api/posts.js
const express = require('express')
const router = express.Router();
router.get('/test', (req, res) => res.json({"message": "OK"}))
module.exports = router
~~~

# how to create a mongoose schema 

~~~js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = User = mongoose.model('users', userSchema)
~~~