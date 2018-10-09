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