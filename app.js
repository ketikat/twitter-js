const express = require('express');
const app = express();

app.use(function (req, res, next) {
  console.log(req.path)
  console.log(req.method)
  next()
})

app.use('/special', function (req, res, next) {
  console.log(`you've reached a special area`);
  next();
})

app.get('/special/prices', function (req, res, next) {
  console.log(`you've reached special prices`);
  res.send(`<h1>special prices</h1>`)
})

app.get('/', function(req, res, next) {
  res.send('<h1>Welcome to Twitter</h1>')
})

app.get('/is-anybody-in-here', function(req, res, next) {
  res.send(`<h1>I'm here</h1>`)
})

app.post('/modernism', function (req, res, next) {
  res.send('you added a new item')
})

app.listen(3000, function () {
  console.log('your server is running')
})
