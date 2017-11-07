const express = require('express');
const app = express();
const routes = require('./routes');

const nunjucks = require('nunjucks');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo'},
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use('/', function (req, res, next) {
  console.log(req.path)
  console.log(req.method)
  res.send(`<h1>under construction</h1>`)
  next()
})

app.use('/', routes);

app.listen(3000, function () {
  console.log('your server is running')
})
