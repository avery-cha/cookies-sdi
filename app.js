const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')

app.get('/login', function(req, res) {

  // define cookie attributes
  var opts = {
    maxAge: 900000,
    httpOnly: true,
    sameSite: 'strict',
  };

  // add a cookie to the response
  if(req.session.username === '') {
    res.cookie('name=', req.body.name, opts);
    res.session.name = req.body.name;
  }
})

app.use(cookieParser())

app.get('/hello', function(req, res) {
   res.send("Welcome " + req.cookies.name + "1");
});

app.listen(8080);