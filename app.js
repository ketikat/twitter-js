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

// app.use is taking a function
// that function looks does this:
// 1.finds the associated file on our system
// 2.if err, move on call (ie. call next)
// otherwise, res.send that file with the correct headers
// --->this is the typical way to use express static middleware
app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
  console.log(req.path)
  console.log(req.method)
  next()
})

app.use('/', routes);

app.listen(3000, function () {
  console.log('your server is running')
})
