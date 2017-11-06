const express = require('express');
const app = express();

app.use(function (req, res, next) {
  console.log(req.path)
  console.log(req.method)
  next()
})

app.get('/', function(req, res, next) {
  res.send('<h1>Welcome to Twitter</h1>')
})

app.post('/moderism', function (req, res, next) {
  res.send('you added')
})

app.listen(3000, function () {
  console.log('your server is running')
})
