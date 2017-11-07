const express = require('express');
const app = express();

const nunjucks = require('nunjucks');



var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
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



app.use(function (req, res, next) {
  console.log(req.path)
  console.log(req.method)
  next()
})

// app.use('/special', function (req, res, next) {
//   console.log(`you've reached a special area`);
//   next();
// })

// app.get('/special/prices', function (req, res, next) {
//   console.log(`you've reached special prices`);
//   res.send(`<h1>special prices</h1>`)
// })

app.get('/', function(req, res, next) {
  res.send('<h1>Welcome to Twitter</h1>')
})

app.get('/is-anybody-in-here', function(req, res, next) {

  res.render('index', locals, function(err, html){
    res.send(html);
  })

})

app.post('/modernism', function (req, res, next) {
  res.send('you added a new item')
})

app.listen(3000, function () {
  console.log('your server is running')
})
